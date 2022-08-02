import LooksOneIcon from "@mui/icons-material/LooksOne";
import BlockExplorer from "../../../pages/Group6/Block Explorer/BlockExplorer";
import Faq6 from "../../../pages/Group6/Faq6/Faq6";

export const sidebarLabel6 = [
    {
        id: 0,
        icon: <LooksOneIcon />,
        label: "Block Explorer",
        route: "block-explorer",
        page: <BlockExplorer />,
    },
    {
        id: 1,
        icon: <LooksOneIcon />,
        label: "FAQ",
        route: "faq-6",
        page: <Faq6 />,
    },
];
