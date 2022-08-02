import React from "react";
import { useNavigate } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { sidebarLabel1 } from "./consts/sidebarLabel1";
import { sidebarLabel2 } from "./consts/sidebarLabel2";
import { sidebarLabel3 } from "./consts/sidebarLabel3";
import { sidebarLabel4 } from "./consts/sidebarLabel4";
import { sidebarLabel5 } from "./consts/sidebarLabel5";
import { sidebarLabel6 } from "./consts/sidebarLabel6";

import logo from "../../media/logo.jpg";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
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

const drawerWidth = 220;

const Sidebar = () => {
    // For navigation links
    const navigate = useNavigate();

    // For the accordion sidebar
    const [expanded, setExpanded] = React.useState("");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <img src={logo} alt="Logo" style={{ height: "64px" }} />
            <Divider />
            <List>
                <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                    <AccordionSummary id="panel1d-header">
                        <Typography>Your Policies and Claims</Typography>
                    </AccordionSummary>
                    {sidebarLabel1.map((item, index) => (
                        <ListItem key={item.id} disablePadding onClick={() => navigate(item.route)}>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </Accordion>
            </List>
            <Divider />
            <List>
                <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                    <AccordionSummary id="panel2d-header">
                        <Typography>Customer Guilds</Typography>
                    </AccordionSummary>
                    {sidebarLabel2.map((item, index) => (
                        <ListItem key={item.id} disablePadding onClick={() => navigate(item.route)}>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </Accordion>
            </List>
            <Divider />
            <List>
                <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                    <AccordionSummary id="panel3d-header">
                        <Typography>Account Management</Typography>
                    </AccordionSummary>
                    {sidebarLabel3.map((item, index) => (
                        <ListItem key={item.id} disablePadding onClick={() => navigate(item.route)}>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </Accordion>
            </List>
            <Divider />
            <List>
                <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
                    <AccordionSummary id="panel4d-header">
                        <Typography>Claims/Damage Assessment Dashboard</Typography>
                    </AccordionSummary>
                    {sidebarLabel4.map((item, index) => (
                        <ListItem key={item.id} disablePadding onClick={() => navigate(item.route)}>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </Accordion>
            </List>
            <Divider />
            <List>
                <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
                    <AccordionSummary id="panel5d-header">
                        <Typography>Shareholder DAO</Typography>
                    </AccordionSummary>
                    {sidebarLabel5.map((item, index) => (
                        <ListItem key={item.id} disablePadding onClick={() => navigate(item.route)}>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </Accordion>
            </List>
            <Divider />
            <List>
                <Accordion expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
                    <AccordionSummary id="panel6d-header">
                        <Typography>Kaleido Network Monitor</Typography>
                    </AccordionSummary>
                    {sidebarLabel6.map((item, index) => (
                        <ListItem key={item.id} disablePadding onClick={() => navigate(item.route)}>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </Accordion>
            </List>
        </Drawer>
    );
};

export { Sidebar, drawerWidth };
