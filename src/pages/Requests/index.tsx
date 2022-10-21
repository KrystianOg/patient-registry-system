import { Grid } from "@mui/material";
import { StyledFab } from "../../components";
import { Add } from "@mui/icons-material";
import RequestCard from "./RequestCard";
import { useNavigate } from "react-router-dom";
const requests = [
	{
		id: 1,
		patientId: 5,
		symptoms: ["something", "something2"],
	},
	{
		id: 2,
		patientId: 6,
		symptoms: ["some symptom 4", "some symptom 5"],
	},
	{
		id: 3,
		patientId: 7,
		symptoms: ["some symptom 6", "some symptom 7"],
	},
];

const Requests = () => {
	const navigate = useNavigate();
	const handleAddNavigate = () => navigate("/requests/create");

	return (
		<>
			<Grid
				container
				spacing={{ xs: 1.5, md: 2 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
				sx={{ padding: "8px" }}
			>
				{requests.map((request, index) => (
					<RequestCard {...request} key={index} />
				))}
			</Grid>
			<StyledFab aria-label="add" onClick={handleAddNavigate}>
				<Add />
			</StyledFab>
		</>
	);
};

export default Requests;
