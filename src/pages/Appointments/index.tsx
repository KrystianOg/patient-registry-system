import { Grid } from "@mui/material";
import { Add } from "@mui/icons-material";
import AppointmentCard from "./AppointmentCard";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useGetAppointmentsQuery } from "../../app/services/appointments";
import { StyledFab } from "../../components";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../features/authSlice";
import { UserType } from "../../types";
import { useSelector } from "react-redux";
import Calendar from "../../components/Calendar";

const Appointments = () => {
	const { data: appointments, isLoading } = useGetAppointmentsQuery();
	const navigate = useNavigate();
	const handleAddNavigate = () => navigate("/appointments/create");
	const user = useSelector(selectCurrentUser);
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Calendar />
			{!isLoading && (
				<Grid
					container
					spacing={{ xs: 0.5, md: 1 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{appointments?.map((appointment, index) => (
						<AppointmentCard {...appointment} key={index} />
					))}
				</Grid>
			)}
			{/* {user?.types.includes(UserType.DOCTOR) && (
				// <StyledFab aria-label="add" onClick={handleAddNavigate}>
				// 	<Add />
				// </StyledFab>
			)} */}
		</LocalizationProvider>
	);
};

export default Appointments;
