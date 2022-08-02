import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./theme";
import "./index.css";

import { sidebarLabel1 } from "./components/sidebar/consts/sidebarLabel1";
import { sidebarLabel2 } from "./components/sidebar/consts/sidebarLabel2";
import { sidebarLabel3 } from "./components/sidebar/consts/sidebarLabel3";
import { sidebarLabel4 } from "./components/sidebar/consts/sidebarLabel4";
import { sidebarLabel5 } from "./components/sidebar/consts/sidebarLabel5";
import { sidebarLabel6 } from "./components/sidebar/consts/sidebarLabel6";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={themeOptions}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        {sidebarLabel1.map((item, index) => (
                            <Route key={index} path={item.route} element={item.page} />
                        ))}
                        {sidebarLabel2.map((item, index) => (
                            <Route key={index} path={item.route} element={item.page} />
                        ))}
                        {sidebarLabel3.map((item, index) => (
                            <Route key={index} path={item.route} element={item.page} />
                        ))}
                        {sidebarLabel4.map((item, index) => (
                            <Route key={index} path={item.route} element={item.page} />
                        ))}
                        {sidebarLabel5.map((item, index) => (
                            <Route key={index} path={item.route} element={item.page} />
                        ))}
                        {sidebarLabel6.map((item, index) => (
                            <Route key={index} path={item.route} element={item.page} />
                        ))}
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
