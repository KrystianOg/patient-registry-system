import { Fab, styled, Slide, Box } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const StyledFab = styled(Fab)(({ theme }) => ({
	position: "absolute",
	top: 16,
	right: 16,
}));

const StyledBox = styled(Box)(({ theme }) => ({
	position: "relative",
	maxWidth: "100%",
	maxHeight: "100%",
	background: theme.palette.background.paper,
}));

const SlideInNav = () => {
	const [active, setActive] = useState<boolean>(false);

	return (
		<>
			{/* TODO */}
			{/* {
				<StyledFab onClick={() => setActive(!active)}>
					<Menu />
				</StyledFab>
			}

			<Slide direction="left" in={active} mountOnEnter unmountOnExit>
				<StyledBox>
					<NavLink to="calendar">Calendar</NavLink>
					<NavLink to="appointments">Appointments</NavLink>
					<NavLink to="requests">Requests</NavLink>
					<NavLink to="account">Account</NavLink>
				</StyledBox>
			</Slide> */}
		</>
	);
};

export default SlideInNav;
