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

const Faq3 = () => {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <React.Fragment>
            <Typography variant="h2">Frequently Asked Questions</Typography>
            <Accordion className="mt-4" expanded={expanded === "panel11"} onChange={handleChange("panel11")}>
                <AccordionSummary id="panel11d-header">
                    <Typography>Why use the blockchain?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Blockchains are open-access, transparent - allowing them to democratize self-organization. </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel12"} onChange={handleChange("panel12")}>
                <AccordionSummary id="panel12d-header">
                    <Typography>Why private blockchain?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Safety, security, regulatory arbitrage and finer control tools, plus did I mention, ability to make it gas free?</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel13"} onChange={handleChange("panel13")}>
                <AccordionSummary id="panel13d-header">
                    <Typography>What is a DAO?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>A DAO is a decentralized autonomous organization, basically a self governing group of individuals. The blockchain provides tools for people to self-organize, in this application, to try to get lower premiums. </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel14"} onChange={handleChange("panel14")}>
                <AccordionSummary id="panel14d-header">
                    <Typography>
                        <i className="fa-solid fa-gift"></i> What is a Insurance Reward Token?{" "}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>This is our platform's reward token. Reward tokens will be redeemable for rewards in the future. </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel15"} onChange={handleChange("panel15")}>
                <AccordionSummary id="panel15d-header">
                    <Typography>
                        <i className="fa-solid fa-coins"></i> What is a Guild Governance Token?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Guild governance token is awarded to you, 1 GGT for every $1 spent on policies with us. A GGT can be converted into voting power in any Guild that you join. </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel16"} onChange={handleChange("panel16")}>
                <AccordionSummary id="panel16d-header">
                    <Typography>
                        <i className="fa-solid fa-people-group"></i> What is a DAO Insurance Platform Shareholder Token?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>This is a shareholder token representing 1 voting power in decisions that govern the treasury and is entitled to a share of every issurance of the DAO revenue.</Typography>
                </AccordionDetails>
            </Accordion>
        </React.Fragment>
    );
};

export default Faq3;
