import GoogleLogout from "react-google-login";
import config from "../../config.json";
import { signout } from "../../features/authSlice";
import { useAppDispatch } from "../../hooks";

const GoogleSignout = () => {
	const dispatch = useAppDispatch();

	return (
		<GoogleLogout
			buttonText="Logout"
			clientId={config.GOOGLE_CLIENT_ID}
			onSuccess={() => dispatch(signout())}
		/>
	);
};

export default GoogleSignout;
