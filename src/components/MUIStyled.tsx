import { styled, Button, Card, Fab, Avatar } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
	color: "white!important",
	borderRadius: "20px",
	"&:hover": {
		backgroundColor: theme.palette.secondary.dark,
		transition: "backgroundColor 0.2s ease-in-out",
	},
}));

export const StyledCard = styled(Card)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	border: "1px solid",
	borderColor: theme.palette.primary.main,
	borderRadius: "12px",
}));

export const StyledFab = styled(Fab)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	position: "fixed",
	bottom: 64,
	right: 16,
	color: "white",
	zIndex: 2,
	"&:hover": {
		transition: "all 0.3s ease-in-out",
		backgroundColor: theme.palette.secondary.dark,
	},
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
}));
