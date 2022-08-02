import LooksOneIcon from "@mui/icons-material/LooksOne";
import CreateNewGuild from "../../../pages/Group2/CreateNewGuild/CreateNewGuild";
import ViewGuilds from "../../../pages/Group2/ViewGuilds/ViewGuilds";
import GuildGovernance from "../../../pages/Group2/GuildGovernance/GuildGovernance";
import Faq2 from "../../../pages/Group2/Faq2/Faq2";


export const sidebarLabel2 = [
    {
        id: 0,
        icon: <LooksOneIcon />,
        label: "Create New Guild",
        route: "create-new-guild",
        page: <CreateNewGuild />,
    },
    {
        id: 1,
        icon: <LooksOneIcon />,
        label: "View Guilds (Join/Leave)",
        route: "view-guilds",
        page: <ViewGuilds />,
    },
    {
        id: 2,
        icon: <LooksOneIcon />,
        label: "Guild Governance",
        route: "guild-governance",
        page: <GuildGovernance />,
    },
    {
        id: 3,
        icon: <LooksOneIcon />,
        label: "FAQ",
        route: "faq-2",
        page: <Faq2 />,
    },
];
