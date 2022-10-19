import {
	Avatar,
	Button,
	TextField,
	FormControlLabel,
	Checkbox,
	Grid,
	Stack,
	Box,
	Typography,
} from "@mui/material/";
import { StyledTextLink, StyledContainer } from "./StyledComponents";
import { LockOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useSigninMutation } from "../../app/services/auth";
import GoogleLogin from "./GoogleSignin";
import { useAppSelector } from "../../hooks/useStore";
import { selectIsAuthenticated } from "../../features/auth/authSlice";

type SignInData = {
	email: string;
	password: string;
	rememberMe: boolean;
};

export default function SignIn() {
	const [signin] = useSigninMutation();
	const isAuthenticated = useAppSelector(selectIsAuthenticated);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const [formData, setFormData] = useState<SignInData>({
		email: "",
		password: "",
		rememberMe: false,
	});

	const [error, setError] = useState<boolean>(false);

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const loginUser = async (e?: any) => {
		e?.preventDefault();

		signin(formData)
			.unwrap()
			.then(() => navigate("/", { replace: true, state: { from } }));
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
				<Box component="form" onSubmit={(e) => loginUser(e)} sx={{ mt: 1 }}>
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
								color="primary"
								onChange={(e) => {
									setFormData({ ...formData, rememberMe: !e.target.checked });
								}}
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
