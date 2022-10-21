import { Add, Close } from "@mui/icons-material";
import {
	Button,
	Stack,
	styled,
	TextField,
	Typography,
	Zoom,
} from "@mui/material";
import { useState } from "react";
import { SymptomsContainer } from "../../components";
import { useNavigate } from "react-router-dom";

const StyledButton = styled(Button)(({ theme }) => ({
	color: "white",
	"&:hover": {
		backgroundColor: theme.palette.secondary.dark,
		transition: "backgroundColor 0.2s ease-in-out",
	},
}));

const AddRequest = () => {
	const [addSymptom, setAddSymptom] = useState<string>("");
	const [symptoms, setSymptoms] = useState<string[]>([]);
	const navigate = useNavigate();
	const handleAddSymptom = (key?: string) => {
		console.log(key);
		if (!key || key === "Enter") {
			setAddSymptom("");

			const label = addSymptom.trim();
			if (!label) return;
			setSymptoms([...symptoms, label]);
		}
	};

	const handleRemoveSymptom = (index: number) => {
		setSymptoms(symptoms.filter((_, i) => i !== index));
	};

	const handleAddRequest = () => {
		// TODO: some redux logic
		navigate("/requests");
	};

	return (
		<Stack spacing={2}>
			{symptoms.length > 0 && (
				<>
					<Typography sx={{ color: "black", fontSize: "16px" }}>
						Describe your symptoms:
					</Typography>
					<SymptomsContainer>
						{symptoms.map((symptom, index) => (
							<Zoom key={symptom} in={true}>
								<StyledButton
									key={index}
									variant="contained"
									sx={{
										marginRight: "0.5rem",
										marginTop: "0.5rem",
										borderRadius: "20px",
										color: "white",
									}}
									onClick={() => handleRemoveSymptom(index)}
									endIcon={<Close />}
								>
									{symptom}
								</StyledButton>
							</Zoom>
						))}
					</SymptomsContainer>
				</>
			)}
			<TextField
				label="Symptom"
				value={addSymptom}
				onChange={(e) => setAddSymptom(e.target.value)}
				onKeyDown={(e) => handleAddSymptom(e.key)}
				InputProps={{
					endAdornment: (
						<Button
							variant="contained"
							onClick={() => handleAddSymptom()}
							sx={{ borderRadius: "28px", color: "white" }}
						>
							<Add />
						</Button>
					),
				}}
			/>
			<Button
				variant="contained"
				sx={{ borderRadius: "20px", color: "white" }}
				onClick={handleAddRequest}
			>
				REQUEST APPOINTMENT
			</Button>
		</Stack>
	);
};

export default AddRequest;
