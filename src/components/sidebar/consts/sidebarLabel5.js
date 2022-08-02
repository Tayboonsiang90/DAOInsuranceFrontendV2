import LooksOneIcon from "@mui/icons-material/LooksOne";

import SmartContractStatus from "../../../pages/Group5/SmartContractStatus/SmartContractStatus";
import CreateNewProposal from "../../../pages/Group5/CreateNewProposal/CreateNewProposal";
import ShareholderDAO from "../../../pages/Group5/ShareholderDAO/ShareholderDAO";
import DividendsStaking from "../../../pages/Group5/DividendsStaking/DividendsStaking";
import TradeShares from "../../../pages/Group5/TradeShares/TradeShares";
import Faq5 from "../../../pages/Group5/Faq5/Faq5";

export const sidebarLabel5 = [
    {
        id: 0,
        icon: <LooksOneIcon />,
        label: "System Status",
        route: "smart-contract-status",
        page: <SmartContractStatus />,
    },
    {
        id: 1,
        icon: <LooksOneIcon />,
        label: "Create new Proposal",
        route: "create-new-proposal",
        page: <CreateNewProposal />,
    },
    {
        id: 2,
        icon: <LooksOneIcon />,
        label: "Shareholder Governance DAO",
        route: "shareholder-DAO",
        page: <ShareholderDAO />,
    },
    {
        id: 3,
        icon: <LooksOneIcon />,
        label: "Dividends Staking",
        route: "dividends-staking",
        page: <DividendsStaking />,
    },
    {
        id: 4,
        icon: <LooksOneIcon />,
        label: "Trade SHARES",
        route: "trade-shares",
        page: <TradeShares />,
    },
    {
        id: 5,
        icon: <LooksOneIcon />,
        label: "FAQ",
        route: "faq-5",
        page: <Faq5 />,
    },
];
