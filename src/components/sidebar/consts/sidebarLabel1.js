import LooksOneIcon from "@mui/icons-material/LooksOne";

import BuyNewPolicy from "../../../pages/Group1/BuyNewPolicy/BuyNewPolicy";
import YourPolicies from "../../../pages/Group1/YourPolicies/YourPolicies";

export const sidebarLabel1 = [
    {
        id: 0,
        icon: <LooksOneIcon />,
        label: "Buy New Policy",
        route: "buy-new-policy",
        page: <BuyNewPolicy />,
    },
    {
        id: 1,
        icon: <LooksOneIcon />,
        label: "Your Policies",
        route: "your-policies",
        page: <YourPolicies />,
    },
];
