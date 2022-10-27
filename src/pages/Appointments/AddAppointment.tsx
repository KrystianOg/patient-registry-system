import {
	Button,
	Stack,
	TextField,
	styled,
	Zoom,
	Typography,
	Divider,
	Chip,
} from "@mui/material";
import { useEffect, useState } from "react";
import { DateTimePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { SymptomsContainer } from "../../components";
import { useLocation } from "react-router-dom";
import { CreateAppointment } from "../../types";
import { useGetRequestQuery } from "../../app/services/requests";
import { useAddAppointmentMutation } from "../../app/services/appointments";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const StyledDivider = styled(Divider)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	margin: "0.5rem 0",
}));

const AddAppointment = () => {
	const [time, setTime] = useState<Dayjs | null>(dayjs());
	const [period, setPeriod] = useState<Dayjs | null>(dayjs("2022-10-10 00:30"));
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const location = useLocation();
	const id: number = location.state.id as number;

	// Redux
	const { data: request, isLoading } = useGetRequestQuery(id);
	const [createAppointment, { isLoading: isAddLoading }] =
		useAddAppointmentMutation();

	const [notes, setNotes] = useState<string>("");
	const handleCreate = async () => {
		//check form
		const patient = request?.patient.id;
		const date = time?.format("YYYY-MM-DDTHH:mm");
		const duration: string | undefined = period?.format("HH:mm:ss");

		if (patient && date && duration) {
			await createAppointment({
				request: id,
				patient,
				date,
				duration,
				comment: notes,
			})
				.unwrap()
				.then((res) => {
					navigate("/requests");
				});
		}
	};

	return (
		<>
			{!isLoading && request && (
				<Stack spacing={2}>
					<TextField
						label={
							request.patient.username
								? `Patient: ${request.patient.username}`
								: `Patient: ${request.patient.email}`
						}
						variant="standard"
						disabled
					/>
					{request.patient.username && (
						<TextField
							label={`e-mail: ${request.patient.email}`}
							variant="standard"
							disabled
						/>
					)}
					<StyledDivider />
					{request?.symptoms && (
						<>
							<Typography sx={{ color: "black", fontSize: "16px" }}>
								Symptoms:
							</Typography>
							<SymptomsContainer>
								{request.symptoms.map((symptom, index) => (
									<Zoom key={symptom} in={true}>
										<Chip
											color="primary"
											label={symptom}
											sx={{ color: "white", margin: "3px" }}
										/>
									</Zoom>
								))}
							</SymptomsContainer>
						</>
					)}

					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DateTimePicker
							label="Date and time"
							ampm={false}
							value={time}
							onChange={(e) => setTime(e)}
							renderInput={(params: any) => <TextField {...params} />}
						/>
						<TimePicker
							ampm={false}
							views={["hours", "minutes"]}
							inputFormat="HH:mm"
							mask="__:__"
							label="Duration"
							value={period}
							onChange={(newValue: any) => {
								setPeriod(newValue);
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
					<TextField
						multiline
						rows={3}
						label="Notes"
						value={notes}
						onChange={(e) => setNotes(e.target.value)}
					/>
					<Button
						variant="contained"
						sx={{ borderRadius: "20px", color: "white" }}
						onClick={handleCreate}
					>
						CREATE APPOINTMENT
					</Button>
				</Stack>
			)}
		</>
	);
};

export default AddAppointment;
