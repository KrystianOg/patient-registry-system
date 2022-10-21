import { Grid } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useEffect } from "react";
import AppointmentCard from "./AppointmentCard";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StyledFab } from "../../components";
import { useNavigate } from "react-router-dom";

const appointments = [
	{
		id: 1,
		name: "John Doe",
		comment: "Some comment",
	},
	{
		id: 2,
		name: "Jane Doe",
		comment: "Something",
	},
	{
		id: 3,
		name: "John Smith",
		comment: "Some comment",
	},
];

const Appointments = () => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Grid
				container
				spacing={{ xs: 1.5, md: 2 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
				sx={{ padding: "8px" }}
			>
				{appointments.map((appointment, index) => (
					<AppointmentCard {...appointment} key={index} />
				))}
			</Grid>
		</LocalizationProvider>
	);
};

export default Appointments;
