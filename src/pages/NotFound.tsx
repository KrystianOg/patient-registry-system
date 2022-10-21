import { Button, styled } from "@mui/material";
import notFound404 from "../animations/not-found.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

const StyledNotFound = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
});

const NotFound = () => {
	const navigate = useNavigate();
	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<StyledNotFound>
			<Lottie animationData={notFound404} style={{ width: 400, height: 400 }} />
			<Button size="large" onClick={handleGoBack}>
				GO BACK
			</Button>
		</StyledNotFound>
	);
};

export default NotFound;
