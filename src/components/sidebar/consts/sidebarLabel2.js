import LooksOneIcon from "@mui/icons-material/LooksOne";

import CreateNewProposal from "../../../pages/Group2/CreateNewProposal/CreateNewProposal";
import ViewCurrentProposals from "../../../pages/Group2/ViewCurrentProposals/ViewCurrentProposals";
import ViewOldProposals from "../../../pages/Group2/ViewOldProposals/ViewOldProposals";

export const sidebarLabel2 = [
    {
        id: 0,
        icon: <LooksOneIcon />,
        label: "Create New Proposal",
        route: "create-new-proposal",
        page: <CreateNewProposal />,
    },
    {
        id: 1,
        icon: <LooksOneIcon />,
        label: "View Current Proposals",
        route: "view-current-proposals",
        page: <ViewCurrentProposals />,
    },
    {
        id: 2,
        icon: <LooksOneIcon />,
        label: "View Old Proposals",
        route: "view-old-proposals",
        page: <ViewOldProposals />,
    },
];
