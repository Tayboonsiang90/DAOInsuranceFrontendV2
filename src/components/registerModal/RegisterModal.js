import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField, Typography, Button } from "@mui/material";
import singpass from "../../media/singpass.jpg";

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

const RegisterModal = ({ open, onClose }) => {
    return (
        <div>
            <Modal open={open} onClose={onClose}>
                <Box sx={wrapperStyle}>
                    <Typography>Register your credentials here</Typography>
                    <Box sx={inputFieldsStyle}>
                        <TextField required id="outlined-required" label="Username" />
                        <TextField required id="outlined-required" label="Password" sx={marginStyle} />
                        <TextField required id="outlined-required" label="Repeat Password" sx={marginStyle} />
                        <Button variant="contained" color="secondary" sx={marginStyle}>
                            Register
                        </Button>
                        <Button>
                            <img className="mt-2" src={singpass} alt="Singpass" style={{ height: "64px" }} />
                        </Button>
                        <Typography sx={marginStyle}>Already have an account? Login here.</Typography>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default RegisterModal;
