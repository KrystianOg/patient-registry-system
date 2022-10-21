import {
	Button,
	Stack,
	TextField,
	styled,
	Zoom,
	Typography,
	Divider,
} from "@mui/material";
import { useEffect, useState } from "react";
import { DateTimePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { SymptomsContainer } from "../../components";
import { useLocation } from "react-router-dom";

const StyledDivider = styled(Divider)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	margin: "0.5rem 0",
}));

// TODO: replace that with ./types
interface Props {
	id: number;
	symptoms: string[];
}

const AddAppointment = () => {
	const [symptoms, setSymptoms] = useState<string[]>([]);
	const [time, setTime] = useState<Dayjs | null>(dayjs("2014-08-18T21:11:54"));
	const [duration, setDuration] = useState<Dayjs | null>(dayjs("2022-10-10"));

	const location = useLocation();
	const state = location.state as Props;

	useEffect(() => {
		if (state) {
			setSymptoms(state.symptoms);
		}
	}, []);

	return (
		<Stack spacing={2}>
			<TextField label={`Patient id: ${5}`} variant="standard" disabled />
			<StyledDivider />
			{symptoms.length > 0 && (
				<>
					<Typography sx={{ color: "black", fontSize: "16px" }}>
						Symptoms:
					</Typography>
					<SymptomsContainer>
						{symptoms.map((symptom, index) => (
							<Zoom key={symptom} in={true}>
								<Button
									key={index}
									variant="contained"
									sx={{
										marginRight: "0.5rem",
										marginTop: "0.5rem",
										borderRadius: "20px",
										color: "white",
									}}
								>
									{symptom}
								</Button>
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
					value={duration}
					onChange={(newValue: any) => {
						setDuration(newValue);
					}}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
			<TextField multiline rows={3} label="Notes" />
			<Button variant="contained" sx={{ borderRadius: "20px", color: "white" }}>
				CREATE APPOINTMENT
			</Button>
		</Stack>
	);
};

export default AddAppointment;
