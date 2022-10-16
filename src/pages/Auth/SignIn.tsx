import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { StyledTextLink, StyledContainer } from "./StyledComponents";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { LockOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { axiosPublic as axios } from "../../utils/axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import { QuickHelmet } from "../../components";
import jwt from "jwt-decode";
import { Stack } from "@mui/material";
import { useDebounce } from "usehooks-ts";
import { selectIsAuthenticated } from "../../features/auth/authSlice";
import { useSigninMutation } from "../../app/services/auth";
import { useAppSelector } from "../../hooks/useStore";

type SignInData = {
	email: string;
	password: string;
	rememberMe: boolean;
};

export default function SignIn() {
	const [signin, { isLoading }] = useSigninMutation();
	const isAuthenticated = useAppSelector(selectIsAuthenticated);

	const navigate = useNavigate();
	const location = useLocation();
	const { auth, setAuth } = useAuth();
	const from = location.state?.from?.pathname || "/";

	const [formData, setFormData] = useState<SignInData>({
		email: "",
		password: "",
		rememberMe: false,
	});
	const debouncedValue = useDebounce<SignInData>(formData, 700);

	const [error, setError] = useState<boolean>(false);

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		console.log("debounced");
		loginUser();
	}, [debouncedValue]);

	const loginUser = async (e?: any) => {
		e?.preventDefault();
		signin(formData)
			.unwrap()
			.then((fulfilled) => {
				navigate("/");
			});
	};

	return (
		<StyledContainer maxWidth="xs">
			<QuickHelmet title="PRS - Sign In" />
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
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						spacing="2"
					>
						<Button variant="contained" sx={{ mt: 3, mb: 2 }}>
							GO BACK
						</Button>{" "}
						{/* TODO: some navigation with replace GO BACK */}
						<Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
							Sign In
						</Button>
					</Stack>
					<Grid container>
						<Grid item xs>
							<StyledTextLink to="/forgotpassword">
								Forgot password?
							</StyledTextLink>
						</Grid>
						<Grid item>
							<StyledTextLink to="/signup">
								Don't have an account? Sign Up
							</StyledTextLink>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</StyledContainer>
	);
}
