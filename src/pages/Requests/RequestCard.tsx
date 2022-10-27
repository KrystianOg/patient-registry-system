import { MoreTime, Delete } from "@mui/icons-material";
import {
	CardHeader,
	Grid,
	Typography,
	Zoom,
	Box,
	styled,
	IconButton,
	CardContent,
	useTheme,
	Chip,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteRequestMutation } from "../../app/services/requests";
import { StyledAvatar, StyledCard } from "../../components";
import { selectCurrentUser } from "../../features/authSlice";
import { useAppSelector } from "../../hooks";
import { Request, UserType } from "../../types";

const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: "white",
	borderRadius: "20px",
	marginTop: "0.5rem",
	marginRight: "0.5rem",
	padding: "0.2rem 0.6rem",
	display: "block",
}));

// add remove timeout
// https://redux.js.org/understanding/history-and-design/middleware#:~:text=case.%0A%20*/%0Aconst-,timeoutScheduler,-%3D%20store%20%3D%3E

const RequestCard = (request: Request) => {
	const theme = useTheme();
	const navigate = useNavigate();
	const user = useAppSelector(selectCurrentUser);
	const [deleteRequest, { isLoading: isDeleteLoading }] =
		useDeleteRequestMutation();
	const handleRemoveRequest = async () => {
		console.log(request);
		await deleteRequest(request.id);
	};

	const handlePatientHistory = () => {
		navigate(`/patient/${request.patient.id}/history`);
	};

	const handleCreateAppointment = () => {
		console.log(request);
		// TODO: pass props
		navigate("/appointments/create", {
			replace: true,
			state: {
				id: request.id,
			},
		});
	};

	return (
		<Grid item xs={4}>
			<StyledCard>
				<CardHeader
					avatar={<StyledAvatar>{request.patient.id}</StyledAvatar>}
					title={
						<Typography
							sx={{ color: "black", fontSize: "16px" }}
							onClick={handlePatientHistory}
						>
							Patient
						</Typography>
					}
					subheader={`Request ${request.id}`}
					action={
						<>
							{/* TODO: or specific user */}
							{user?.types.includes(UserType.DOCTOR) && (
								<IconButton
									sx={{ color: theme.palette.primary.dark }}
									aria-label="delete"
									onClick={handleRemoveRequest}
								>
									<Delete />
								</IconButton>
							)}
							{user?.types.includes(UserType.DOCTOR) && (
								<IconButton
									sx={{ color: theme.palette.primary.dark }}
									aria-label="create appointment"
									onClick={handleCreateAppointment}
								>
									<MoreTime />
								</IconButton>
							)}
						</>
					}
				/>
				<CardContent>
					<Typography sx={{ color: "black", fontSize: "16px" }}>
						Symptoms: {!request.symptoms && "None"}
					</Typography>
					{request?.symptoms?.map((symptom, index) => (
						<Zoom key={symptom} in={index >= 0} timeout={index * 100}>
							<Chip
								color="primary"
								label={symptom}
								sx={{ color: "white", margin: "3px" }}
							/>
						</Zoom>
					))}
					<Typography
						sx={{ color: "black", fontSize: "16px", margin: "0.3rem" }}
					>
						Comment: {request.comment}
					</Typography>
				</CardContent>
			</StyledCard>
		</Grid>
	);
};

export default RequestCard;
