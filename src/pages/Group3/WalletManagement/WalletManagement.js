import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useUserContext } from "../../../contexts/userProvider";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from "axios";

const WalletManagement = () => {
    let { login, retrieveAccessTokenFromLocalStorage, retrieveAndSetWalletsBasedOnAccessToken, accessToken, setAccessToken, username, setUsername, walletList, setWalletList, activeWallet, setActiveWallet } = useUserContext();

    let createWallet = async () => {
        console.log("Adding new wallet...");
        console.log(accessToken);
        await axios.post(
            process.env.REACT_APP_BACKEND_API + "/wallets/wallet/create",
            {
                //...data
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        retrieveAndSetWalletsBasedOnAccessToken();
    };

    return (
        <>
            <Box>
                <Typography variant="h4">Wallet Management</Typography>
                <Typography>Active Wallet Addresses: {walletList.length}</Typography>
            </Box>
            <Box className="mt-3">
                <Button variant="contained" onClick={createWallet}>
                    Generate New Wallet
                </Button>
                <TableContainer component={Paper} className="mt-1">
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Wallet Address</TableCell>
                                <TableCell>SGDP Balance</TableCell>
                                <TableCell>GUILD Token</TableCell>
                                <TableCell>REWARD Token</TableCell>
                                <TableCell>SHARE Token</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {walletList.map((row, index) => (
                                <TableRow key={row}>
                                    <TableCell>{index}</TableCell>
                                    <TableCell>{row}</TableCell>
                                    <TableCell>0.00</TableCell>
                                    <TableCell>100.11</TableCell>
                                    <TableCell>200.22</TableCell>
                                    <TableCell>300.33</TableCell>
                                    <TableCell>
                                        <Button color="warning" variant="contained">
                                            Delete Wallet
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
};

export default WalletManagement;
