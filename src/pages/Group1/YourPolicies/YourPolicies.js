import React from "react";
import { Typography, Grid, Box, Select, MenuItem, Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Modal from "@mui/material/Modal";

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

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const YourPolicies = () => {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <React.Fragment>
            <Typography variant="h2">Your Active Policies</Typography>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
            <Accordion className="mt-4" expanded={expanded === "panel11"} onChange={handleChange("panel11")}>
                <AccordionSummary id="panel11d-header">
                    <Typography>Policy #14353</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Divider className="mb-2" />
                            <Typography>Car Make: Audi </Typography>
                            <Typography>Car Model: A4</Typography>
                            <Typography>Year Registered: 2018</Typography>
                            <Typography>Car Plate Number: SMD2848H</Typography>
                            <Divider className="mb-2 mt-2" />
                            <Typography>Monthly Premium: SGDP $68</Typography>
                            <Typography>Policy Start Date: 18/05/2022</Typography>
                            <Typography>Policy End Date: 17/08/2023</Typography>
                            <Divider className="mb-2 mt-2" />
                            <Typography>Purchasing Guild: None</Typography>
                            <Typography>Guild Discount: 0%</Typography>
                            <Divider className="mb-2 mt-2" />
                            <Typography>Claims Made: 1</Typography>
                            <Divider className="mt-2" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button type="submit" fullWidth variant="contained" color="success">
                                View Policy Document (PDF)
                            </Button>
                            <Grid container>
                                <Grid item xs={12} sm={6}>
                                    <Button type="submit" fullWidth variant="contained" className="mt-3" color="primary">
                                        Pay Premium for
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Select fullWidth color="secondary" required labelId="select1label" id="select1" label="Months" name="carMake">
                                        {[...Array(24).keys()].map((index) => (
                                            <MenuItem key={index + 1} value={index + 1}>
                                                {index + 1} months
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                            </Grid>
                            <Button onClick={handleOpen} type="submit" fullWidth variant="contained" className="mt-3" color="warning">
                                Submit Claim
                            </Button>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel12"} onChange={handleChange("panel12")}>
                <AccordionSummary id="panel12d-header">
                    <Typography>Policy #26636</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Divider className="mb-2" />
                            <Typography>Car Make: Audi </Typography>
                            <Typography>Car Model: A4</Typography>
                            <Typography>Year Registered: 2018</Typography>
                            <Typography>Car Plate Number: SMD2848H</Typography>
                            <Divider className="mb-2 mt-2" />
                            <Typography>Monthly Premium: SGDP $68</Typography>
                            <Typography>Policy Start Date: 18/05/2022</Typography>
                            <Typography>Policy End Date: 17/08/2023</Typography>
                            <Divider className="mb-2 mt-2" />
                            <Typography>Purchasing Guild: None</Typography>
                            <Typography>Guild Discount: 0%</Typography>
                            <Divider className="mb-2 mt-2" />
                            <Typography>Claims Made: 1</Typography>
                            <Divider className="mt-2" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button type="submit" fullWidth variant="contained" color="success">
                                View Policy Document (PDF)
                            </Button>
                            <Grid container>
                                <Grid item xs={12} sm={6}>
                                    <Button type="submit" fullWidth variant="contained" className="mt-3" color="primary">
                                        Pay Premium for
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Select fullWidth color="secondary" required labelId="select1label" id="select1" label="Months" name="carMake">
                                        {[...Array(24).keys()].map((index) => (
                                            <MenuItem key={index + 1} value={index + 1}>
                                                {index + 1} months
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                            </Grid>
                            <Button onClick={handleOpen} type="submit" fullWidth variant="contained" className="mt-3" color="warning">
                                Submit Claim
                            </Button>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel13"} onChange={handleChange("panel13")}>
                <AccordionSummary id="panel13d-header">
                    <Typography>Policy #36344</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Divider className="mb-2" />
                            <Typography>Car Make: Audi </Typography>
                            <Typography>Car Model: A4</Typography>
                            <Typography>Year Registered: 2018</Typography>
                            <Typography>Car Plate Number: SMD2848H</Typography>
                            <Divider className="mb-2 mt-2" />
                            <Typography>Monthly Premium: SGDP $68</Typography>
                            <Typography>Policy Start Date: 18/05/2022</Typography>
                            <Typography>Policy End Date: 17/08/2023</Typography>
                            <Divider className="mb-2 mt-2" />
                            <Typography>Purchasing Guild: None</Typography>
                            <Typography>Guild Discount: 0%</Typography>
                            <Divider className="mb-2 mt-2" />
                            <Typography>Claims Made: 1</Typography>
                            <Divider className="mt-2" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button type="submit" fullWidth variant="contained" color="success">
                                View Policy Document (PDF)
                            </Button>
                            <Grid container>
                                <Grid item xs={12} sm={6}>
                                    <Button type="submit" fullWidth variant="contained" className="mt-3" color="primary">
                                        Pay Premium for
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Select fullWidth color="secondary" required labelId="select1label" id="select1" label="Months" name="carMake">
                                        {[...Array(24).keys()].map((index) => (
                                            <MenuItem key={index + 1} value={index + 1}>
                                                {index + 1} months
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                            </Grid>
                            <Button onClick={handleOpen} type="submit" fullWidth variant="contained" className="mt-3" color="warning">
                                Submit Claim
                            </Button>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Typography variant="h2" className="mt-5">
                Your Expired Policies
            </Typography>
            <Accordion className="mt-4" expanded={expanded === "panel21"} onChange={handleChange("panel21")}>
                <AccordionSummary id="panel21d-header">
                    <Typography>Policy #1464</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography>Car Make: </Typography>
                            <Typography>Car Model: </Typography>
                            <Typography>Year Registered: </Typography>
                            <Typography>Car Plate Number: </Typography>
                            <Typography>Purchasing Guild: </Typography>
                            <Typography>Car Make: </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button type="submit" fullWidth variant="contained" color="success">
                                View Policy Document (PDF)
                            </Button>
                            <Grid container>
                                <Grid item xs={12} sm={6}>
                                    <Button disabled type="submit" fullWidth variant="contained" className="mt-3" color="primary">
                                        Pay Premium for
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Select fullWidth color="secondary" required labelId="select1label" id="select1" label="Months" name="carMake">
                                        {[...Array(24).keys()].map((index) => (
                                            <MenuItem key={index + 1} value={index + 1}>
                                                {index + 1} months
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                            </Grid>
                            <Button disabled type="submit" fullWidth variant="contained" className="mt-3" color="warning">
                                Submit Claim
                            </Button>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel22"} onChange={handleChange("panel22")}>
                <AccordionSummary id="panel22d-header">
                    <Typography>Policy #2436</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography>Car Make: </Typography>
                            <Typography>Car Model: </Typography>
                            <Typography>Year Registered: </Typography>
                            <Typography>Car Plate Number: </Typography>
                            <Typography>Purchasing Guild: </Typography>
                            <Typography>Car Make: </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button type="submit" fullWidth variant="contained" color="success">
                                View Policy Document (PDF)
                            </Button>
                            <Grid container>
                                <Grid item xs={12} sm={6}>
                                    <Button disabled type="submit" fullWidth variant="contained" className="mt-3" color="primary">
                                        Pay Premium for
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Select fullWidth color="secondary" required labelId="select1label" id="select1" label="Months" name="carMake">
                                        {[...Array(24).keys()].map((index) => (
                                            <MenuItem key={index + 1} value={index + 1}>
                                                {index + 1} months
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                            </Grid>
                            <Button disabled type="submit" fullWidth variant="contained" className="mt-3" color="warning">
                                Submit Claim
                            </Button>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel23"} onChange={handleChange("panel23")}>
                <AccordionSummary id="panel23d-header">
                    <Typography>Policy #3464</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography>Car Make: </Typography>
                            <Typography>Car Model: </Typography>
                            <Typography>Year Registered: </Typography>
                            <Typography>Car Plate Number: </Typography>
                            <Typography>Purchasing Guild: </Typography>
                            <Typography>Car Make: </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button type="submit" fullWidth variant="contained" color="success">
                                View Policy Document (PDF)
                            </Button>
                            <Grid container>
                                <Grid item xs={12} sm={6}>
                                    <Button disabled type="submit" fullWidth variant="contained" className="mt-3" color="primary">
                                        Pay Premium for
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Select fullWidth color="secondary" required labelId="select1label" id="select1" label="Months" name="carMake">
                                        {[...Array(24).keys()].map((index) => (
                                            <MenuItem key={index + 1} value={index + 1}>
                                                {index + 1} months
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                            </Grid>
                            <Button disabled type="submit" fullWidth variant="contained" className="mt-3" color="warning">
                                Submit Claim
                            </Button>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </React.Fragment>
    );
};

export default YourPolicies;
