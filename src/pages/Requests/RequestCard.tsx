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
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { StyledAvatar, StyledCard } from "../../components";

interface Props {
	id: number;
	patientId: number;
	symptoms: string[];
}

const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: "white",
	borderRadius: "20px",
	marginTop: "0.5rem",
	marginRight: "0.5rem",
	padding: "0.2rem 0.6rem",
	display: "block",
}));

const RequestCard = ({ id, patientId, symptoms }: Props) => {
	const theme = useTheme();
	const navigate = useNavigate();

	const handleRemoveRequest = () => {
		// redux logic
		console.log("future remove item");
	};

	const handlePatientHistory = () => {
		navigate(`/patient/${patientId}/history`);
	};

	const handleCreateAppointment = () => {
		// TODO: pass props
		navigate("/appointments/create", {
			replace: true,
			state: { id: 5, symptoms: ["Something", "Something 2"] },
		});
	};

	return (
		<Grid item xs={4}>
			<StyledCard>
				<CardHeader
					avatar={<StyledAvatar>{patientId}</StyledAvatar>}
					title={
						<Typography
							sx={{ color: "black", fontSize: "16px" }}
							onClick={handlePatientHistory}
						>
							Patient {patientId}
						</Typography>
					}
					subheader={`Request ${id}`}
					action={
						<>
							<IconButton
								sx={{ color: theme.palette.primary.dark }}
								aria-label="delete"
								onClick={handleRemoveRequest}
							>
								<Delete />
							</IconButton>
							<IconButton
								sx={{ color: theme.palette.primary.dark }}
								aria-label="create appointment"
								onClick={handleCreateAppointment}
							>
								<MoreTime />
							</IconButton>
						</>
					}
				/>
				<CardContent>
					<Typography sx={{ color: "black", fontSize: "16px" }}>
						Symptoms:
					</Typography>
					{symptoms.map((symptom, index) => (
						<Zoom key={symptom} in={index >= 0} timeout={index * 100}>
							<StyledBox>{symptom}</StyledBox>
						</Zoom>
					))}
				</CardContent>
			</StyledCard>
		</Grid>
	);
};

export default RequestCard;
