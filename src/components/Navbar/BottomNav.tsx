import {
	BottomNavigation,
	BottomNavigationAction,
	styled,
	useTheme,
} from "@mui/material";
import { CalendarToday, Home, Person } from "@mui/icons-material";
import { useState } from "react";
import Stetoscope from "../../static/stetoscope";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const StickBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	borderRadius: "15px 15px 0 0",
	bottom: 0,
	position: "fixed",
	width: "100vw",
}));

enum BottomNavButtons {
	Appointments = "Appointments",
	Home = "Home",
	Calendar = "Calendar",
	Account = "Account",
}

const StyledBottomNA = styled(BottomNavigationAction)(({ theme }) => ({
	color: theme.palette.primary.dark,
}));

const BottomNav = () => {
	const [value, setValue] = useState<BottomNavButtons>(BottomNavButtons.Home);
	const theme = useTheme();
	const { auth } = useAuth();
	return (
		<StickBottomNavigation
			showLabels
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
		>
			<Link to="/appointments">
				<StyledBottomNA
					label="Appointments"
					value={BottomNavButtons.Appointments}
					icon={<Stetoscope color={theme.palette.primary.dark} />}
				/>
			</Link>

			<Link to="/">
				<StyledBottomNA
					label="Home"
					value={BottomNavButtons.Home}
					icon={<Home />}
				/>
			</Link>
			{auth?.user && (
				<Link to="/calendar">
					<StyledBottomNA
						label="Calendar"
						value={BottomNavButtons.Calendar}
						icon={<CalendarToday />}
					/>
				</Link>
			)}
			<Link to="/account">
				<StyledBottomNA
					label="Account"
					value={BottomNavButtons.Account}
					icon={<Person />}
				/>
			</Link>
		</StickBottomNavigation>
	);
};

export default BottomNav;
