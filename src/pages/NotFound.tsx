import { styled } from "@mui/material";
import notFound404 from "../animations/not-found.json";
import Lottie from "lottie-react";

const StyledNotFound = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	height: "100vh",
});

const NotFound = () => {
	return (
		<StyledNotFound>
			<Lottie animationData={notFound404} style={{ width: 400, height: 400 }} />
		</StyledNotFound>
	);
};

export default NotFound;
