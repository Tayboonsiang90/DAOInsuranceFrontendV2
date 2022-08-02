import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoginModal from "../loginModal/LoginModal";
import RegisterModal from "../registerModal/RegisterModal";
import Avatar from "@mui/material/Avatar";
import { useUserContext } from "../../contexts/userProvider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";

const Navbar = () => {
    let { login, retrieveAccessTokenFromLocalStorage, retrieveAndSetWalletsBasedOnAccessToken, accessToken, setAccessToken, username, setUsername, walletList, setWalletList, activeWallet, setActiveWallet } = useUserContext();

    // State for Login Modal
    const [openLoginModal, setOpenLoginModal] = useState(false);
    // State for Register Modal
    const [openRegisterModal, setOpenRegisterModal] = useState(false);

    // Component Did Mount (Runs once on mounting)
    useEffect(() => {
        retrieveAccessTokenFromLocalStorage();
    }, []);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} noWrap={true}>
                    DAO Insurance Demo App
                </Typography>
                {!accessToken && (
                    <>
                        <Button variant="contained" color="secondary" sx={{ mr: 1 }} onClick={() => setOpenRegisterModal(true)}>
                            Register
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => setOpenLoginModal(true)}>
                            Login
                        </Button>
                    </>
                )}
                {accessToken && (
                    <>
                        <Box className="d-flex flex-column align-items-end m-2">
                            <Box className="d-flex justify-content-between w-100">
                                <Typography component="div" noWrap={true}>
                                    Welcome, {username}{" "}
                                </Typography>
                                <Box>
                                    <i className="fa-solid fa-sack-dollar"></i> SGDP Balance:{" "}
                                    <Typography color="info.contrastText" component="span">
                                        0
                                    </Typography>
                                </Box>
                            </Box>
                            <FormControl fullWidth size="small">
                                <InputLabel disableAnimation color="info" id="active-wallet">
                                    Active Wallet
                                </InputLabel>
                                <Select
                                    labelId="active-wallet"
                                    value={activeWallet}
                                    label="Age"
                                    onChange={(evt) => {
                                        setActiveWallet(evt.target.value);
                                    }}
                                >
                                    {walletList.map((row, index) => (
                                        <MenuItem key={index} value={index}>
                                            {row}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>

                        <Avatar sx={{ mr: 1 }}>{username[0].toUpperCase()}</Avatar>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => {
                                console.log("Clearing local storage");
                                setAccessToken("");
                                setUsername("");
                                setWalletList([]);
                                localStorage.setItem("accessToken", "");
                            }}
                        >
                            Logout
                        </Button>
                    </>
                )}
            </Toolbar>
            <LoginModal open={openLoginModal} onClose={() => setOpenLoginModal(false)} />
            <RegisterModal open={openRegisterModal} onClose={() => setOpenRegisterModal(false)} />
        </AppBar>
    );
};

export default Navbar;
