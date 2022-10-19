import { GoogleLogin } from "react-google-login";
import config from "../../config.json";
import { useSigninWithGoogleMutation } from "../../app/services/auth";
import { useCallback } from "react";
import { Button, styled } from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
const clientId = config.google_clientId;

const StyledGoogleSignin = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: "white",

	"&:hover": {
		backgroundColor: theme.palette.primary.dark,
	},
}));

const Login = () => {
	const [signinWithGoogle, { isLoading }] = useSigninWithGoogleMutation();

	const onGoogleLoginSuccess = useCallback((response: any) => {
		const idToken = response.tokenId;
		const data = {
			email: response.profileObj.email,
			first_name: response.profileObj.givenName,
			last_name: response.profileObj.familyName,
		};

		signinWithGoogle(idToken)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
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

export default Login;
