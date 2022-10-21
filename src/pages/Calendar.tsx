import { Box, BoxProps, styled } from "@mui/material";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
// import SlideInNav from "../components/Navbar/SlideInNav";

const CalendarComponent = (props: BoxProps) => {
	const navigate = useNavigate();
	const onChange = (event: any) => {
		const date = new Date(event);
		navigate(
			`/appointments?date=${date.getFullYear()}-${
				date.getMonth() + 1
			}-${date.getDate()}`
		);
	};

	return (
		<CalendarContainer {...props}>
			<Calendar onChange={onChange} />
		</CalendarContainer>
	);
};

export default CalendarComponent;

const CalendarContainer = styled(Box)(({ theme }) => ({
	maxWidth: "600px",
	margin: "0 auto",
	padding: "10px",
	borderRadius: "4px",
	//navigation styles
	".react-calendar__navigation": {
		display: "flex",
		".react-calendar__navigation__label": {
			fontWeight: "bold",
		},

		".react-calendar__navigation__arrow": {
			flexGrow: 0.333,
		},
	},

	//label styles
	".react-calendar__month-view__weekdays": {
		textAlign: "center",
	},

	//button styles
	button: {
		margin: "2px",
		backgroundColor: theme.palette.primary.light,
		border: 0,
		borderRadius: "4px",
		color: "white",
		padding: "5px 0",

		"&:hover": {
			backgroundColor: theme.palette.primary.dark,
		},

		"&:active": {
			backgroundColor: theme.palette.primary.main,
		},
	},

	//day grid styles
	".react-calendar__month-view__days": {
		display: "grid !important",
		gridTemplateColumns: "repeat(7, 1fr)",

		".react-calendar__tile": {
			maxWidth: "initial !important",
		},

		"react-calendar__tile--range": {
			backgroundColor: theme.palette.primary.main,
		},
	},

	// other view styles
	".react-calendar__year-view__months, .react-calendar__decade-view__years, .react-calendar__century-view__decades":
		{
			display: "grid !important",
			gridTemplateColumns: "repeat(5, 1fr) !important",

			"&.react-calendar__year-view__months": {
				gridTemplateColumns: "repeat(3, 1fr)",
			},

			".react-calendar__tile": {
				maxWidth: "initial !important",
			},
		},
}));
