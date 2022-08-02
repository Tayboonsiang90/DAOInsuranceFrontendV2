import LooksOneIcon from "@mui/icons-material/LooksOne";

import Profile from "../../../pages/Group3/Profile/Profile";
import KYCStatus from "../../../pages/Group3/KYCStatus/KYCStatus";
import WalletManagement from "../../../pages/Group3/WalletManagement/WalletManagement";
import Faq3 from "../../../pages/Group3/Faq3/Faq3";

export const sidebarLabel3 = [
    {
        id: 0,
        icon: <LooksOneIcon />,
        label: "User Profile",
        route: "profile",
        page: <Profile />,
    },
    {
        id: 1,
        icon: <LooksOneIcon />,
        label: "KYC Status",
        route: "kyc-status",
        page: <KYCStatus />,
    },
    {
        id: 2,
        icon: <LooksOneIcon />,
        label: "Wallet Management",
        route: "wallet-management",
        page: <WalletManagement />,
    },
    {
        id: 3,
        icon: <LooksOneIcon />,
        label: "FAQ",
        route: "faq-3",
        page: <Faq3 />,
    },
];
