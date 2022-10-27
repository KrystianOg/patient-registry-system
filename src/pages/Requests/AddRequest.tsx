import { Add, Delete } from "@mui/icons-material";
import {
	Box,
	Button,
	Chip,
	LinearProgress,
	Stack,
	TextField,
	Typography,
	Zoom,
} from "@mui/material";
import { useState } from "react";
import { StyledButton, SymptomsContainer } from "../../components";
import { useNavigate } from "react-router-dom";
import { useAddRequestMutation } from "../../app/services/requests";

interface AddRequestData {
	symptoms: string[];
	comment: string;
}

const AddRequest = () => {
	const [addSymptom, setAddSymptom] = useState<string>("");
	const [formData, setFormData] = useState<AddRequestData>({
		symptoms: [],
		comment: "",
	});

	const navigate = useNavigate();
	const handleAddSymptom = (key?: string) => {
		if (!key || key === "Enter") {
			setAddSymptom("");

			const label = addSymptom.trim();
			if (!label) return;
			setFormData((prev) => ({
				...prev,
				symptoms: [...prev.symptoms, label],
			}));
		}
	};

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleDelete = (index: number): void => {
		const newSymptoms = formData.symptoms.filter((_, i) => i !== index);
		setFormData({ ...formData, symptoms: newSymptoms });
	};

	const [addRequest, { isLoading }] = useAddRequestMutation();

	const handleAddRequest = async () => {
		console.log(formData);
		await addRequest(formData).unwrap();
		navigate("/requests");
	};

	return (
		<Stack spacing={2}>
			<>
				<Typography
					sx={{ color: "black", fontSize: "16px", marginTop: "48px" }}
				>
					Describe your symptoms
				</Typography>
				{formData.symptoms.length > 0 && (
					<SymptomsContainer>
						{formData.symptoms.map((symptom, index) => (
							<Zoom key={symptom} in={true}>
								<Chip
									color="primary"
									sx={{ color: "white", margin: "3px" }}
									key={symptom}
									label={symptom}
									onDelete={() => handleDelete(index)}
									deleteIcon={<Delete sx={{ color: "white" }} />}
								/>
							</Zoom>
						))}
					</SymptomsContainer>
				)}
			</>
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
			<TextField
				multiline
				rows={3}
				label="Description"
				name="comment"
				placeholder="Describe your symptoms"
				onChange={(e) => handleChange(e)}
			/>
			{!isLoading ? (
				<StyledButton variant="contained" onClick={handleAddRequest}>
					<Typography sx={{ color: "white" }}>REQUEST APPOINTMENT</Typography>
				</StyledButton>
			) : (
				<Box sx={{ width: "100%" }}>
					<LinearProgress />
				</Box>
			)}
		</Stack>
	);
};

export default AddRequest;
