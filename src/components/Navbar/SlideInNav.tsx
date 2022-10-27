import { Fab, styled, Slide, Drawer, Stack, IconButton } from "@mui/material";
import { useGoogleLogout } from "react-google-login";
import { Menu, Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { useWindowSize } from "usehooks-ts";
import { selectIsAuthenticated } from "../../features/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { signout } from "../../features/authSlice";
import GoogleSignout from "../../pages/Auth/GoogleSignout";

const StyledFab = styled(Fab)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: "white",
	position: "fixed",
	top: 16,
	right: 16,
	zIndex: 2,
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
	textAlign: "center",
	fontSize: "2rem",
	letterSpacing: "0.08rem",
	fontWeight: "500",
	textDecoration: "none",
	color: theme.palette.primary.main,
	height: "56px",

	"&:hover": {
		color: theme.palette.secondary.dark,
		transition: "color 0.3s ease-in-out",
	},
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
	color: theme.palette.primary.main,
	marginTop: "3rem",
	fontSize: "3rem",
	"&:hover": {
		color: theme.palette.secondary.dark,
		transition: "color 0.3s ease-in-out",
	},
}));

const SlideInNav = () => {
	const authenticated = useAppSelector(selectIsAuthenticated);
	const dispatch = useAppDispatch();
	const { width } = useWindowSize();
	const [active, setActive] = useState<boolean>(false);

	const location = useLocation();

	useEffect(() => {
		setActive(false);
	}, [location]);

	if (width < 600)
		return (
			<>
				{/* TODO */}

				<StyledFab onClick={() => setActive(!active)}>
					<Menu />
				</StyledFab>

				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					variant="temporary"
					anchor="right"
					open={active}
					onClose={() => setActive(false)}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": { boxSizing: "border-box", width: width },
					}}
				>
					<Stack height="100%" alignItems="stretch" justifyContent="center">
						{authenticated ? (
							<>
								<StyledNavLink to="/appointments">APPOINTMENTS</StyledNavLink>
								<StyledNavLink to="/requests">REQUESTS</StyledNavLink>
								<StyledNavLink to="/account">ACCOUNT</StyledNavLink>
								<StyledNavLink to="/" onClick={() => dispatch(signout())}>
									SIGN OUT
								</StyledNavLink>
							</>
						) : (
							<>
								<StyledNavLink to="/signin">SIGN IN</StyledNavLink>
								<StyledNavLink to="/signup">SIGN UP</StyledNavLink>
							</>
						)}
						<StyledIconButton onClick={() => setActive(false)}>
							<Close fontSize="inherit" />
						</StyledIconButton>
					</Stack>
				</Drawer>
			</>
		);

	return null;
};

export default SlideInNav;
