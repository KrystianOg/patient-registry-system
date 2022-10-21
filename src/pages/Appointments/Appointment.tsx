import { Box, Button, Stack, TextField } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useState } from "react";

const Appointment = () => {
	const [symptoms, setSymptoms] = useState<string[]>(["label1", "label2"]);

	return (
		<Stack>
			<TextField label="Patient's name" />
			<Box>
				{symptoms.map((symptom, index) => (
					<Button key={index} variant="contained" endIcon={<Close />}>
						{symptom}
					</Button>
				))}
			</Box>
		</Stack>
	);
};

export default Appointment;
