import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField, Typography, Button } from "@mui/material";

import { useUserContext } from "../../contexts/userProvider";

const wrapperStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const inputFieldsStyle = {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    marginBottom: "15px",
    ".MuiInput-root": {
        marginBottom: "20px",
    },
};

const marginStyle = {
    marginTop: "10px",
};

const LoginModal = ({ open, onClose }) => {
    const navigate = useNavigate();

    let { login, accessToken, setAccessToken } = useUserContext();
    const [formInput, setFormInput] = useState({ username: "", password: "" });

    const onChangeHandler = (event) => {
        setFormInput({ ...formInput, [event.target.name]: event.target.value });
    };

    const onClickLogin = () => {
        login(formInput.username, formInput.password);
        onClose();
        navigate("/profile");
    };

    return (
        <div>
            <Modal open={open} onClose={onClose}>
                <Box sx={wrapperStyle}>
                    <Typography>Key in your login credentials</Typography>
                    <Box sx={inputFieldsStyle}>
                        <TextField required id="outlined-required" label="Username" name="username" value={formInput.username} onChange={onChangeHandler} />
                        <TextField required id="outlined-required" label="Password" name="password" sx={marginStyle} value={formInput.password} onChange={onChangeHandler} />
                        <Button variant="contained" color="secondary" sx={marginStyle} onClick={onClickLogin}>
                            Login
                        </Button>
                        <Typography sx={marginStyle}>Register a new account.</Typography>
                        <Typography sx={marginStyle}>Forgot your password?</Typography>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default LoginModal;
