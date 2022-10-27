import {
	Avatar,
	Button,
	TextField,
	FormControlLabel,
	Checkbox,
	Stack,
	Box,
	Typography,
} from "@mui/material/";
import { StyledTextLink, StyledContainer } from "./StyledComponents";
import { LockOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import GoogleLogin from "./GoogleSignin";
import { useNavigate } from "react-router-dom";
import { useSigninMutation } from "../../app/services/auth";
import {
	selectIdFromToken,
	setCredentials,
	setUserInfo,
} from "../../features/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { useGetUserQuery } from "../../app/services/users";
import { skipToken } from "@reduxjs/toolkit/dist/query/react";

type SignInData = {
	email: string;
	password: string;
};

export default function SignIn() {
	const dispatch = useAppDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";
	const [formData, setFormData] = useState<SignInData>({
		email: "",
		password: "",
	});

	const id = useAppSelector(selectIdFromToken);
	const [signin, { isLoading }] = useSigninMutation();
	const { data: userData, refetch } = useGetUserQuery(id ?? skipToken);
	useEffect(() => {
		console.log("Reloaded");
		if (userData) {
			dispatch(setUserInfo(userData));
			navigate("/appointments");
		}
	}, [userData]);
	const [error] = useState<boolean>(false);

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const loginUser = async (e?: any) => {
		e?.preventDefault();

		try {
			const token = await signin(formData).unwrap();
			dispatch(setCredentials(token));
			refetch();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<StyledContainer maxWidth="xs">
			<Helmet>
				<title>Sign In</title>
			</Helmet>
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
					<LockOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Box
					component="form"
					onSubmit={(e: any) => loginUser(e)}
					sx={{ mt: 1 }}
				>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						value={formData.email}
						onChange={handleChange}
						error={error}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						value={formData.password}
						onChange={handleChange}
						sx={{ borderRadius: "20px" }}
						error={error}
						helperText={error ? "Invalid email or password" : ""}
					/>
					<FormControlLabel
						control={
							<Checkbox
								value="remember"
								name="rememberMe"
								color="primary"
								onChange={handleChange}
							/>
						}
						label="Remember me"
					/>
					<Stack spacing={2} alignItems="center" sx={{ mb: 3 }}>
						<Button
							type="submit"
							variant="contained"
							sx={{
								mt: 3,
								mb: 2,
								width: "100%",
								borderRadius: "20px",
								color: "white",
							}}
						>
							Sign In
						</Button>
						Or
						<GoogleLogin
							// navigateTo="/calendar"
							sx={{ width: "100%", borderRadius: "20px" }}
						/>
					</Stack>

					<Stack justifyContent="space-between" direction="row">
						<StyledTextLink to="/forgotpassword">
							Forgot password?
						</StyledTextLink>

						<StyledTextLink to="/signup">
							Don't have an account? Sign Up
						</StyledTextLink>
					</Stack>
				</Box>
			</Box>
		</StyledContainer>
	);
}
