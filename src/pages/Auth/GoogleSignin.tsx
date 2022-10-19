import { GoogleLogin } from "react-google-login";
import config from "../../config.json";
import { useSigninWithGoogleMutation } from "../../app/services/auth";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonProps, styled } from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
const clientId = config.google_clientId;

const StyledGoogleSignin = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: "white",

	"&:hover": {
		backgroundColor: theme.palette.secondary.dark,
	},
}));

const SignIn = (props: ButtonProps) => {
	const [signinWithGoogle, { isLoading }] = useSigninWithGoogleMutation();
	const navigate = useNavigate();
	const onGoogleLoginSuccess = useCallback((response: any) => {
		signinWithGoogle(response.tokenId)
			.then(() => {
				// TODO: change that to variable
				navigate("/calendar", { replace: true });
			})
			.catch((err: any) => {
				console.log(err);
			});
	}, []);

	const onFailure = (res: any) => {
		console.log("[Login failed] res:", res);
	};

	return (
		<GoogleLogin
			clientId={clientId}
			buttonText="Login"
			onSuccess={onGoogleLoginSuccess}
			onFailure={onFailure}
			render={(renderProps) => (
				<StyledGoogleSignin
					onClick={renderProps.onClick}
					endIcon={<GoogleIcon />}
					{...props}
				>
					Sign in with Google
				</StyledGoogleSignin>
			)}
			cookiePolicy={"single_host_origin"}
			style={{ marginTop: "100px" }}
			isSignedIn={true}
		/>
	);
};

export default SignIn;
