import { Box, Stack, BottomNavigationAction, styled } from "@mui/material";
import {
	CalendarMonth,
	Person,
	MonitorHeart,
	MoreTime,
} from "@mui/icons-material";
import Stetoscope from "../../static/stetoscope";
import { useNav, Page } from "../../hooks/useNav";
import { useNavigate } from "react-router-dom";

const StickRightBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	borderRadius: "15px 0 0 15px",
	right: 0,
	top: 0,
	position: "fixed",
	height: "100vh",
}));

const SideNav = () => {
	const page = useNav();
	const navigate = useNavigate();
	return (
		<StickRightBox>
			<Stack direction="column">
				<BottomNavigationAction
					label="Appointments"
					value={Page.Appointments}
					onClick={() => navigate("/appointments")}
					icon={<MonitorHeart />}
				/>
				<BottomNavigationAction
					label="Requests"
					value={Page.Requests}
					onClick={() => navigate("/requests")}
					icon={<MoreTime />}
				/>

				<BottomNavigationAction
					label="Account"
					value={Page.Account}
					onClick={() => navigate("/account")}
					icon={<Person />}
				/>
			</Stack>
		</StickRightBox>
	);
};

export default SideNav;
