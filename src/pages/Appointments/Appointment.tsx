import { Box, Button, Stack, TextField } from "@mui/material";
import { Close } from "@mui/icons-material";
import type { Appointment } from "../../types";

const Appointment = ({ id, symptoms, patient, doctor }: Appointment) => {
	//const [symptoms, setSymptoms] = useState<string[]>();

	return (
		<Stack>
			<TextField label={patient.username} />
			<Box>
				{symptoms?.map((symptom, index) => (
					<Button key={index} variant="contained" endIcon={<Close />}>
						{symptom}
					</Button>
				))}
			</Box>
		</Stack>
	);
};

export default Appointment;
