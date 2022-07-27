import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";

import Page1 from "../../../pages/Page1/Page1";
import Page2 from "../../../pages/Page2/Page2";
import Page3 from "../../../pages/Page3/Page3";

export const sidebarLabel2 = [
    {
        id: 0,
        icon: <LooksOneIcon />,
        label: "Page One",
        route: "page1",
        page: <Page1 />,
    },
    {
        id: 1,
        icon: <LooksTwoIcon />,
        label: "Page Two",
        route: "page2",
        page: <Page2 />,
    },
    {
        id: 2,
        icon: <Looks3Icon />,
        label: "Page Three",
        route: "page3",
        page: <Page3 />,
    },
];
