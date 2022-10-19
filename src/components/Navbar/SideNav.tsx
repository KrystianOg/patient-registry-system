import { Box, Stack, BottomNavigationAction, styled } from "@mui/material";
import {
	CalendarMonth,
	Person,
	MonitorHeart,
	MoreTime,
} from "@mui/icons-material";
import { useState } from "react";
import Stetoscope from "../../static/stetoscope";
import React from "react";

const StickRightBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	cornerRadius: "15px 0 0 15px",
	right: 0,
	position: "fixed",
	height: "100vh",
}));

enum BottomNavButtons {
	Appointments = "Appointments",
	Home = "Home",
	Calendar = "Calendar",
	Account = "Account",
}

const SideNav = () => {
	const [value, setValue] = useState<BottomNavButtons>(BottomNavButtons.Home);

	return (
		<StickRightBox>
			<Stack direction="column">
				<BottomNavigationAction
					label="Calendar"
					value={BottomNavButtons.Calendar}
					icon={<CalendarMonth />}
				/>
				<BottomNavigationAction
					label="Appointments"
					value={BottomNavButtons.Appointments}
					icon={<MonitorHeart />}
				/>
				<BottomNavigationAction
					label="Requests"
					value={BottomNavButtons.Home}
					icon={<MoreTime />}
				/>

				<BottomNavigationAction
					label="Account"
					value={BottomNavButtons.Account}
					icon={<Person />}
				/>
			</Stack>
		</StickRightBox>
	);
};

export default SideNav;
