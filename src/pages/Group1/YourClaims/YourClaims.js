import React from "react";
import { Typography, Grid, FormControl, InputLabel, Select, MenuItem, TextField, Slider, Card, CardContent, Button } from "@mui/material";
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

const YourClaims = () => {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <React.Fragment>
            <Typography variant="h2">Your Pending Claims</Typography>
            <Accordion className="mt-4" expanded={expanded === "panel11"} onChange={handleChange("panel11")}>
                <AccordionSummary id="panel11d-header">
                    <Typography>Policy #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel12"} onChange={handleChange("panel12")}>
                <AccordionSummary id="panel12d-header">
                    <Typography>Collapsible Group Item #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel13"} onChange={handleChange("panel13")}>
                <AccordionSummary id="panel13d-header">
                    <Typography>Collapsible Group Item #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
                </AccordionDetails>
            </Accordion>
            <Typography variant="h2" className="mt-5">
                Your Successful Claims
            </Typography>
            <Accordion className="mt-4" expanded={expanded === "panel21"} onChange={handleChange("panel21")}>
                <AccordionSummary id="panel21d-header">
                    <Typography>Policy #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel22"} onChange={handleChange("panel22")}>
                <AccordionSummary id="panel22d-header">
                    <Typography>Collapsible Group Item #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel23"} onChange={handleChange("panel23")}>
                <AccordionSummary id="panel23d-header">
                    <Typography>Collapsible Group Item #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
                </AccordionDetails>
            </Accordion>
            <Typography variant="h2" className="mt-5">
                Your Rejected Claims
            </Typography>
            <Accordion className="mt-4" expanded={expanded === "panel21"} onChange={handleChange("panel21")}>
                <AccordionSummary id="panel21d-header">
                    <Typography>Policy #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel22"} onChange={handleChange("panel22")}>
                <AccordionSummary id="panel22d-header">
                    <Typography>Collapsible Group Item #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel23"} onChange={handleChange("panel23")}>
                <AccordionSummary id="panel23d-header">
                    <Typography>Collapsible Group Item #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
                </AccordionDetails>
            </Accordion>
        </React.Fragment>
    );
};

export default YourClaims;
