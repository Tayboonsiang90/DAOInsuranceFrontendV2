import LooksOneIcon from "@mui/icons-material/LooksOne";

import Faq from "../../../pages/Group3/Faq/Faq";
import Profile from "../../../pages/Group3/Profile/Profile";
import BlockExplorer from "../../../pages/Group3/Block Explorer/BlockExplorer";

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
        label: "Block Explorer",
        route: "block-explorer",
        page: <BlockExplorer />,
    },
    {
        id: 2,
        icon: <LooksOneIcon />,
        label: "FAQ",
        route: "faq",
        page: <Faq />,
    },
];
