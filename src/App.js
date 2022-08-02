import Navbar from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { UserProvider } from "./contexts/userProvider";

import { drawerWidth } from "./components/sidebar/Sidebar";
import { Container } from "@mui/system";

function App() {
    return (
        <div className="App">
            <UserProvider>
                <Sidebar />
                <Box component="main" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
                    <Navbar />
                    <Container className="mt-3">
                        <Outlet />
                    </Container>
                </Box>
            </UserProvider>
        </div>
    );
}

export default App;
