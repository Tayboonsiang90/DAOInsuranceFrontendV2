import LooksOneIcon from "@mui/icons-material/LooksOne";

import ViewClaims from "../../../pages/Group4/ViewClaims/ViewClaims.js";
import Faq4 from "../../../pages/Group4/Faq4/Faq4";
import ClaimsApproval from "../../../pages/Group4/ClaimsApproval/ClaimsApproval";
import DamageAssessment from "../../../pages/Group4/DamageAssessment/DamageAssessment";

export const sidebarLabel4 = [
    {
        id: 0,
        icon: <LooksOneIcon />,
        label: "View All Claims",
        route: "view-claims",
        page: <ViewClaims />,
    },
    {
        id: 1,
        icon: <LooksOneIcon />,
        label: "Damage Assessment",
        route: "damage-assessment",
        page: <DamageAssessment />,
    },
    {
        id: 2,
        icon: <LooksOneIcon />,
        label: "Claims Approval",
        route: "claims-approval",
        page: <ClaimsApproval />,
    },
    {
        id: 3,
        icon: <LooksOneIcon />,
        label: "FAQ",
        route: "faq-4",
        page: <Faq4 />,
    },
];
