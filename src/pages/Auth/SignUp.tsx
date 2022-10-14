import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { LockOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { StyledContainer } from "./StyledComponents";
import { axiosPublic as axios } from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { StyledTextLink } from "./StyledComponents";
import { QuickHelmet } from "../../components";
import { useForm } from "react-hook-form";

type SignUpData = {
	email: string;
	password: string;
	password2: string;
};

export default function SignUp() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	// when forms are valid
	const onSubmit = async (data: any) => {
		await axios
			.post("/auth/signup/", data)
			.then((response) => {
				console.log(response);

				if (response.status === 201) {
					// for now login after signup, TODO: change to email verification
					navigate("/signin");
				} else if (response.status === 409) {
					//409 conflict - user already registered
					console.log("user is already registered");
				} else if (response.status === 400) {
					//400 bad request - passwords don't match
					console.log("passwords do not match");
				} else {
					console.log("error");
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<StyledContainer maxWidth="xs">
			<QuickHelmet title="GEM - Sign Up" />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
				onSubmit={handleSubmit(onSubmit)}
			>
				<Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
					<LockOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign Up
				</Typography>
				<Box component="form" sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						autoComplete="email"
						autoFocus
						{...register("email", {
							required: "Email is required",
							pattern: {
								value:
									/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: "Invalid email",
							},
						})}
						helperText={errors.email?.message && String(errors.email.message)}
						error={errors.email?.message !== undefined}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						{...register("password", {
							required: "Password is required",
							minLength: {
								value: 8,
								message: "Password must be at least 8 characters",
							},
							pattern: {
								value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
								message:
									"Password must contain at least one uppercase letter, one lowercase letter, and one number",
							},
						})}
						helperText={
							errors.password?.message && String(errors.password.message)
						}
						error={errors.password?.message !== undefined}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						label="Repeat Password"
						type="password"
						id="password2"
						autoComplete="current-password"
						{...register("password2", {
							required: true,
							validate: (val: string) => {
								if (watch("password") != val) {
									return "Passwords do not match";
								}
							},
						})}
						helperText={
							errors.password2?.message && String(errors.password2.message)
						}
						error={errors.password2?.message !== undefined}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign Up
					</Button>
					<Grid container>
						<Grid item>
							<StyledTextLink to="/signin">
								Already a member? Sign in
							</StyledTextLink>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</StyledContainer>
	);
}
