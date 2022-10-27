import { Box, Button, styled } from "@mui/material";

const SymptomsContainer = styled(Box)(({ theme }) => ({
	color: "white",
	border: `2px solid`,
	borderColor: theme.palette.primary.main,
	borderRadius: "28px",
	columnGap: "8px"
}));

export default SymptomsContainer