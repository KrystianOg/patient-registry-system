import { Box, Button, styled } from "@mui/material";

const SymptomsContainer = styled(Box)(({ theme }) => ({
	paddingLeft: "0.5rem",
	paddingBottom: "0.5rem",
	color: "white",
	border: `2px solid`,
	borderColor: theme.palette.primary.main,
	borderRadius: "28px",
	columnGap: "8px"
}));

export default SymptomsContainer