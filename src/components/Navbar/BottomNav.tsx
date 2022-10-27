import {
	BottomNavigation,
	BottomNavigationAction,
	styled,
} from "@mui/material";
import {
	CalendarMonth,
	Person,
	MonitorHeart,
	MoreTime,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useNav, Page } from "../../hooks/useNav";

const StickBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	borderRadius: "15px 15px 0 0",
	position: "fixed",
	bottom: 0,
	left: 0,
	width: "100vw",
	zIndex: 2,
}));

const StyledBottomNA = styled(BottomNavigationAction)(({ theme }) => ({
	color: theme.palette.primary.dark,
}));

const BottomNav = () => {
	const navigate = useNavigate();
	const page = useNav();

	return (
		<StickBottomNavigation value={page}>
			{/* TODO: add permissions */}

			<StyledBottomNA
				label="Appointments"
				value={Page.Appointments}
				onClick={() => navigate("/appointments")}
				icon={<MonitorHeart />}
			/>

			<StyledBottomNA
				label="Requests"
				value={Page.Requests}
				onClick={() => navigate("/requests")}
				icon={<MoreTime />}
			/>

			<StyledBottomNA
				label="Account"
				value={Page.Account}
				onClick={() => navigate("/account")}
				icon={<Person />}
			/>
		</StickBottomNavigation>
	);
};

export default BottomNav;
