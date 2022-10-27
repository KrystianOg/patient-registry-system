import { SettingsBackupRestore, Today } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { StyledFab } from "../components";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useTheme } from "@mui/material";

const CalendarComponent = () => {
	const navigate = useNavigate();
	const [active, setActive] = useState<boolean>(false);
	const { width } = useWindowSize();
	const onChange = (event: any) => {
		const date = new Date(event);
		//get requests filtered by date
		// navigate(
		// 	`/appointments?date=${date.getFullYear()}-${
		// 		date.getMonth() + 1
		// 	}-${date.getDate()}`
		// );
		setValue(event);
		setActive(false);
	};

	const [value, setValue] = useState<Dayjs | null>(null);
	const theme = useTheme();
	return (
		<>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker
					open={active}
					label="Smth"
					value={value}
					onChange={onChange}
					onClose={() => setActive(false)}
					renderInput={(params) => <></>}
				/>
			</LocalizationProvider>

			{value && (
				<StyledFab
					aria-label="reset"
					sx={{
						width: "42px",
						height: "42px",
						bottom: "128px",
						right: "23px",
						backgroundColor: theme.palette.primary.light,
					}}
					onClick={() => setValue(null)}
				>
					<SettingsBackupRestore />
				</StyledFab>
			)}

			<StyledFab
				sx={{
					bottom: "64px",
					right: "16px",
				}}
				onClick={() => setActive(!active)}
			>
				<Today />
			</StyledFab>
		</>
	);
};

export default CalendarComponent;
