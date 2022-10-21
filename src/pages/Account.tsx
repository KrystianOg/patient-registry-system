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
import { useState } from "react";

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
				/>
			</SubContainer>
			<Typography>Email notifications</Typography>
			<StyledDivider />

			<SubContainer alignItems="flex-start">
				<FormGroup>
					<FormControlLabel
						control={<Switch />}
						label="Patient changes appointment"
					/>
					<FormControlLabel
						control={<Switch />}
						label="Patient deletes appointments"
					/>
					<FormControlLabel
						control={<Switch />}
						label="Someone assigns you apointment"
					/>
				</FormGroup>
			</SubContainer>
			<Typography>Extra features</Typography>
			<StyledDivider />

			<SubContainer alignItems="flex-start">
				<FormGroup>
					<FormControlLabel control={<Switch />} label="Dark mode" />
					<FormControlLabel control={<Switch />} label="Vacation mode" />
				</FormGroup>
			</SubContainer>
		</Stack>
	);
};

export default Account;
