import {
	BottomNavigation,
	BottomNavigationAction,
	styled,
	useTheme,
} from "@mui/material";
import {
	CalendarMonth,
	Person,
	MonitorHeart,
	MoreTime,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import Stetoscope from "../../static/stetoscope";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import React from "react";

const StickBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	borderRadius: "15px 15px 0 0",
	bottom: 0,
	position: "fixed",
	width: "100vw",
}));

enum BottomNavButtons {
	Appointments = 0,
	Requests = 1,
	Calendar = 2,
	Account = 3,
}

const StyledBottomNA = styled(BottomNavigationAction)(({ theme }) => ({
	color: theme.palette.primary.dark,
}));

const BottomNav = () => {
	const [value, setValue] = useState<BottomNavButtons>(
		BottomNavButtons.Appointments
	);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		switch (location.pathname) {
			case "/appointments":
				setValue(BottomNavButtons.Appointments);
				break;
			case "/requests":
				setValue(BottomNavButtons.Requests);
				break;
			case "/calendar":
				setValue(BottomNavButtons.Calendar);
				break;
			case "/account":
				setValue(BottomNavButtons.Account);
				break;
		}
	}, [location]);

	return (
		<StickBottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
		>
			{/* TODO: add permissions */}
			<StyledBottomNA
				label="Calendar"
				value={BottomNavButtons.Calendar}
				onClick={() => navigate("/calendar")}
				icon={<CalendarMonth />}
			/>

			<StyledBottomNA
				label="Appointments"
				value={BottomNavButtons.Appointments}
				onClick={() => navigate("/appointments")}
				icon={<MonitorHeart />}
			/>

			<StyledBottomNA
				label="Requests"
				value={BottomNavButtons.Requests}
				onClick={() => navigate("/requests")}
				icon={<MoreTime />}
			/>

			<StyledBottomNA
				label="Account"
				value={BottomNavButtons.Account}
				onClick={() => navigate("/account")}
				icon={<Person />}
			/>
		</StickBottomNavigation>
	);
};

export default BottomNav;
