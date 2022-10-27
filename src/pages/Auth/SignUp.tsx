import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LockOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { StyledContainer, StyledTextLink } from "./StyledComponents";
import { useSignupMutation } from "../../app/services/auth";
import { useNavigate } from "react-router-dom";
import { QuickHelmet } from "../../components";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useLocation } from "react-router-dom";
import {
	selectIdFromToken,
	setCredentials,
	setUserInfo,
} from "../../features/authSlice";
import type { SignupCredentials } from "../../types";
import { useEffect, useState } from "react";
import { useGetUserQuery } from "../../app/services/users";
import { skipToken } from "@reduxjs/toolkit/dist/query/react";

export default function SignUp() {
	const dispatch = useAppDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();
	const [formData, setFormData] = useState<SignupCredentials>({
		email: "",
		password: "",
		password2: "",
	});

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const id = useAppSelector(selectIdFromToken);
	const [signup, { isLoading }] = useSignupMutation();

	const { data: userData, refetch } = useGetUserQuery(id ?? skipToken);
	useEffect(() => {
		console.log("Reloaded");
		if (userData) {
			dispatch(setUserInfo(userData));
			navigate("/appointments");
		}
	}, [userData]);
	const registerUser = async (e?: any) => {
		e?.preventDefault();

		await signup(formData)
			.unwrap()
			.then((res) => {
				dispatch(setCredentials(res));
				refetch();
			})
			.catch((err) => {
				console.log(err);
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
			>
				<Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
					<LockOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign Up
				</Typography>
				<Box
					component="form"
					sx={{ mt: 1 }}
					onSubmit={(e: any) => registerUser(e)}
				>
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
									/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: "Invalid email",
							},
						})}
						onChange={(e: any) => handleChange(e)}
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
						onChange={(e: any) => handleChange(e)}
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
						onChange={(e: any) => handleChange(e)}
						helperText={
							errors.password2?.message && String(errors.password2.message)
						}
						error={errors.password2?.message !== undefined}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2, borderRadius: "20px", color: "white" }}
					>
						CREATE ACCOUNT
					</Button>
					<Box sx={{ justifyContent: "center", display: "flex" }}>
						<StyledTextLink to="/signin">
							Already a member? Sign in
						</StyledTextLink>
					</Box>
				</Box>
			</Box>
		</StyledContainer>
	);
}
