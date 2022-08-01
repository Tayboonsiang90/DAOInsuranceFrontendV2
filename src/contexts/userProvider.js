// This is a context for Metamask, to store connected wallet details

/* DEPENDENCIES
 */
import React, { useContext, useState } from "react";

import axios from "axios";
import jwt_decode from "jwt-decode";

const UserContext = React.createContext();

// For subpages that require the context to use
export function useUserContext() {
    return useContext(UserContext);
}

/* STANDARD FUNCTIONS
 */
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

/* MAIN
 */
export function UserProvider({ children }) {
    // State variables
    const [accessToken, setAccessToken] = useState("");
    const [username, setUsername] = useState("");
    const [walletList, setWalletList] = useState([]);
    const [activeWallet, setActiveWallet] = useState(0);

    // State functions
    const login = async (username, password) => {
        try {
            console.log("Logging in with", username, password);
            let req = await axios.post(process.env.REACT_APP_BACKEND_API + "/users/login", { username, password });

            // Store access token in cookie
            localStorage.setItem("accessToken", req.data.accessToken);
            // Store access token in state
            setAccessToken(req.data.accessToken);
            // Set username
            setUsername(jwt_decode(req.data.accessToken).username);
            // Set wallets
            retrieveAndSetWallets(req.data.accessToken);
        } catch (e) {
            console.log(e);
        }
    };

    const retrieveAccessTokenFromLocalStorage = async () => {
        console.log("Checking Local Storage");
        let token = localStorage.getItem("accessToken");
        if (token) {
            setAccessToken(token);
            setUsername(jwt_decode(token).username);
            // Set Wallets
            retrieveAndSetWallets(token);
        }
    };

    let retrieveAndSetWalletsBasedOnAccessToken = async () => {
        console.log("Retrieving wallet for", accessToken);
        let response = await axios.get(process.env.REACT_APP_BACKEND_API + "/wallets/wallet", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        setWalletList(response.data.retrievedWallet);
    };

    // Localized Context Function
    // Retrieve wallet list from API and set wallet to state
    let retrieveAndSetWallets = async (token) => {
        console.log("Retrieving wallet for", token);
        let response = await axios.get(process.env.REACT_APP_BACKEND_API + "/wallets/wallet", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setWalletList(response.data.retrievedWallet);
    };

    return <UserContext.Provider value={{ login, retrieveAccessTokenFromLocalStorage, retrieveAndSetWalletsBasedOnAccessToken, accessToken, setAccessToken, username, setUsername, walletList, setWalletList, activeWallet, setActiveWallet }}>{children}</UserContext.Provider>;
}
