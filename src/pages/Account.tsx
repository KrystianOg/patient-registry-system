import {
	Divider,
	FormControlLabel,
	FormGroup,
	IconButton,
	InputAdornment,
	Stack,
	styled,
	Switch,
	TextField,
	Typography,
} from "@mui/material";
import { Edit, Lock, CheckCircleOutline } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { selectCurrentUser } from "../features/authSlice";
import { useAppSelector } from "../hooks";
import { useUpdateUserMutation } from "../app/services/users";
import { useNavigate } from "react-router-dom";
import { AuthUser } from "../types";
import { useDebounce } from "usehooks-ts";

const SubContainer = styled(Stack)(({ theme }) => ({
	padding: "0 1rem",
	marginBottom: "1.5rem",
	marginTop: "0.5rem",
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	margin: "0.5rem 0",
}));

const Account = () => {
	const [firstnameDisabled, setFirstnameDisabled] = useState<boolean>(true);
	const [lastnameDisabled, setLastnameDisabled] = useState<boolean>(true);
	const user = useAppSelector(selectCurrentUser);
	const [updateUser, setUpdateUser] = useState<AuthUser>(user as AuthUser);
	const debouncedUser = useDebounce<AuthUser>(updateUser, 2000);
	const [updateProfile, { isLoading }] = useUpdateUserMutation();

	useEffect(
		() => () => {
			// objects are equal
			if (JSON.stringify(user) === JSON.stringify(updateUser)) return;

			// update user
			updateProfile(debouncedUser)
				.unwrap()
				.then(() => {
					console.log("Updated");
				})
				.catch((err) => {
					console.log(err);
				});
		},
		[debouncedUser]
	);

	// TODO: save changes on unmount
	return (
		<Stack sx={{ padding: "1.5rem" }}>
			<Typography>Personal information</Typography>
			<StyledDivider />
			<SubContainer spacing={2}>
				<TextField
					variant="standard"
					label="Email"
					disabled
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<IconButton>
									<Lock />
								</IconButton>
							</InputAdornment>
						),
					}}
					value={user?.email}
				/>
				<TextField
					variant="standard"
					label="First name"
					disabled={firstnameDisabled}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<IconButton
									onClick={() => setFirstnameDisabled(!firstnameDisabled)}
								>
									{firstnameDisabled ? (
										<Edit color="primary" />
									) : (
										<CheckCircleOutline color="primary" />
									)}
								</IconButton>
							</InputAdornment>
						),
					}}
					value={updateUser?.first_name || ""}
					onChange={(e) =>
						setUpdateUser({ ...updateUser, first_name: e.target.value })
					}
				/>
				<TextField
					variant="standard"
					label="Last name"
					disabled={lastnameDisabled}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<IconButton
									onClick={() => setLastnameDisabled(!lastnameDisabled)}
								>
									{lastnameDisabled ? (
										<Edit color="primary" />
									) : (
										<CheckCircleOutline color="primary" />
									)}
								</IconButton>
							</InputAdornment>
						),
					}}
					value={updateUser?.last_name || ""}
					onChange={(e) =>
						setUpdateUser({ ...updateUser, last_name: e.target.value })
					}
				/>
			</SubContainer>
			<Typography>Email notifications</Typography>
			<StyledDivider />

			<SubContainer alignItems="flex-start">
				<FormGroup>
					<FormControlLabel
						control={
							<Switch
								checked={updateUser?.doctor_changes_appointment}
								onChange={(e) =>
									setUpdateUser({
										...updateUser,
										doctor_changes_appointment: e.target.checked,
									})
								}
							/>
						}
						label="Doctor changes appointment"
					/>
					<FormControlLabel
						control={
							<Switch
								checked={updateUser?.doctor_deletes_appointment}
								onChange={(e) =>
									setUpdateUser({
										...updateUser,
										doctor_deletes_appointment: e.target.checked,
									})
								}
							/>
						}
						label="Doctor deletes appointment"
					/>
					<FormControlLabel
						control={
							<Switch
								checked={updateUser?.doctor_accepts_appointment}
								onChange={(e) =>
									setUpdateUser({
										...updateUser,
										doctor_accepts_appointment: e.target.checked,
									})
								}
							/>
						}
						label="Doctor accepts appointment"
					/>
				</FormGroup>
			</SubContainer>
			<Typography>Extra features</Typography>
			<StyledDivider />

			<SubContainer alignItems="flex-start">
				<FormGroup>
					<FormControlLabel
						control={
							<Switch
								checked={updateUser?.prefer_dark_mode}
								onChange={(e) =>
									setUpdateUser({
										...updateUser,
										prefer_dark_mode: e.target.checked,
									})
								}
							/>
						}
						label="Dark mode"
					/>
					<FormControlLabel
						control={
							<Switch
								checked={updateUser?.vacation_mode}
								onChange={(e) =>
									setUpdateUser({
										...updateUser,
										vacation_mode: e.target.checked,
									})
								}
							/>
						}
						label="Vacation mode"
					/>
				</FormGroup>
			</SubContainer>
			{/* <StyledButton variant="contained">
				<Typography sx={{ color: "white" }}>SAVE SETTINGS</Typography>
			</StyledButton> */}
		</Stack>
	);
};

export default Account;
