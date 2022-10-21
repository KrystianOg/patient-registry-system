import { Card, styled } from "@mui/material";


const StyledCard = styled(Card)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	border: "2px solid",
	borderColor: theme.palette.primary.main,
	borderRadius: "12px",
}));

export default StyledCard