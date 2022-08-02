import LooksOneIcon from "@mui/icons-material/LooksOne";

import BuyNewPolicy from "../../../pages/Group1/BuyNewPolicy/BuyNewPolicy";
import YourPolicies from "../../../pages/Group1/YourPolicies/YourPolicies";
import YourClaims from "../../../pages/Group1/YourClaims/YourClaims";
import Faq1 from "../../../pages/Group1/Faq1/Faq1";

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
    {
        id: 2,
        icon: <LooksOneIcon />,
        label: "Your Claims",
        route: "your-claims",
        page: <YourClaims />,
    },
    {
        id: 3,
        icon: <LooksOneIcon />,
        label: "FAQ",
        route: "faq-1",
        page: <Faq1 />,
    },
];
