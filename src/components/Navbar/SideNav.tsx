import { Box, Stack, BottomNavigationAction, styled } from "@mui/material";
import { CalendarToday, Home, Person } from "@mui/icons-material";
import { useState } from "react";
import Stetoscope from "../../static/stetoscope";

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
			<Stack>
				<BottomNavigationAction
					label="Appointments"
					value={BottomNavButtons.Appointments}
					icon={<Stetoscope />}
				/>
				<BottomNavigationAction
					label="Home"
					value={BottomNavButtons.Home}
					icon={<Home />}
				/>
				<BottomNavigationAction
					label="Calendar"
					value={BottomNavButtons.Calendar}
					icon={<CalendarToday />}
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
