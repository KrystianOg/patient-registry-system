import { Grid } from "@mui/material";
import { StyledFab } from "../../components";
import { Add } from "@mui/icons-material";
import RequestCard from "./RequestCard";
import { useNavigate } from "react-router-dom";
import { useGetRequestsQuery } from "../../app/services/requests";

const Requests = () => {
	const { data: requests, isLoading, isSuccess } = useGetRequestsQuery();
	console.log(requests);
	const navigate = useNavigate();
	const handleAddNavigate = () => navigate("/requests/create");

	return (
		<>
			{!isLoading && isSuccess && (
				<Grid
					container
					spacing={{ xs: 1.5, md: 2 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
					sx={{ padding: "8px" }}
				>
					{requests?.map((request, index) => (
						<RequestCard {...request} key={index} />
					))}
				</Grid>
			)}
			<StyledFab aria-label="add" onClick={handleAddNavigate}>
				<Add />
			</StyledFab>
		</>
	);
};

export default Requests;
