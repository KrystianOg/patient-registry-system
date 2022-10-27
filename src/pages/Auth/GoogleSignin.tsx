import { GoogleLogin } from "react-google-login";
import config from "../../config.json";
import { useSigninWithGoogleMutation } from "../../app/services/auth";
import { useGetUserQuery } from "../../app/services/users";
import { useNavigate } from "react-router-dom";
import { Button, ButtonProps, styled } from "@mui/material";
import { FlashOffRounded, Google as GoogleIcon } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
	selectIdFromToken,
	setCredentials,
	setUserInfo,
} from "../../features/authSlice";
import { skipToken } from "@reduxjs/toolkit/dist/query/react";
import { useEffect } from "react";

const StyledGoogleSignin = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: "white",

	"&:hover": {
		backgroundColor: theme.palette.secondary.dark,
	},
}));

const SignIn = (props: ButtonProps) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [signin, { isLoading }] = useSigninWithGoogleMutation();

	const id = useAppSelector(selectIdFromToken);

	const { data: userData, refetch } = useGetUserQuery(id ?? skipToken);
	useEffect(() => {
		if (userData) {
			dispatch(setUserInfo(userData));
		}
	}, [userData]);

	const onGoogleLoginSuccess = async (res: any) => {
		const { tokenId } = res;
		try {
			const token = await signin(tokenId).unwrap();
			dispatch(setCredentials(token));
			refetch();
		} catch (err) {
			console.log(err);
		}
	};

	const onFailure = (res: any) => {
		console.log("[Login failed] res:", res);
	};

	return (
		<GoogleLogin
			clientId={config.GOOGLE_CLIENT_ID}
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
			isSignedIn={false}
		/>
	);
};

export default SignIn;
