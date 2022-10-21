import { Fab, styled } from "@mui/material";

const StyledFab = styled(Fab)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	position: "fixed",
	widht: "100px",
	bottom: 64,
	right: 8,
	color: "white",
	zIndex: 2,
	"&:hover": {
		transition: "all 0.3s ease-in-out",
		backgroundColor: theme.palette.secondary.dark,
	}
}));

export default StyledFab;