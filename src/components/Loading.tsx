import { styled, Container } from "@mui/material";
import Lottie from "lottie-react";
import loadingAnimation from "../animations/medical-assistance.json";

const CenterLottie = styled(Lottie)``;

const Loading = () => {
	return (
		<Container maxWidth="xs">
			<CenterLottie animationData={loadingAnimation} loop={true} />
		</Container>
	);
};

export default Loading;
