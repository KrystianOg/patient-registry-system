import { GoogleLogin } from "react-google-login";
import config from "../../config.json";
import { useSigninWithGoogleMutation } from "../../app/services/auth";
import { useCallback } from "react";
const clientId = config.google_clientId;

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

	const onSuccess = (res: any) => {
		console.log("[Login Success] currentUser:", res.tokenId);
		signinWithGoogle(res.tokenId);
	};

	const onFailure = (res: any) => {
		console.log("[Login failed] res:", res);
	};

	return (
		<div>
			<GoogleLogin
				clientId={clientId}
				buttonText="Login"
				onSuccess={onGoogleLoginSuccess}
				onFailure={onFailure}
				cookiePolicy={"single_host_origin"}
				style={{ marginTop: "100px" }}
				isSignedIn={true}
			/>
		</div>
	);
};

export default Login;
