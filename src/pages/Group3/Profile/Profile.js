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


import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />} {...props} />)(({ theme }) => ({
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Profile = () => {
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
                <Typography variant="h4">User Profile</Typography>
                <Typography>Username: {username}</Typography>
                <Typography>Active Wallet Addresses: {walletList.length}</Typography>
            </Box>
            <Box className="mt-3">
                <Button variant="contained" onClick={createWallet}>
                    Add New Account
                </Button>
                <TableContainer component={Paper} className="mt-1">
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Wallet Address</TableCell>
                                <TableCell>SGDP Token </TableCell>
                                <TableCell>SHARE</TableCell>
                                <TableCell>REWARD</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {walletList.map((row, index) => (
                                <TableRow key={row}>
                                    <TableCell>{index}</TableCell>
                                    <TableCell>{row}</TableCell>
                                    <TableCell>$0</TableCell>
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

export default Profile;
