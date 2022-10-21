import {
	Grid,
	CardActions,
	CardContent,
	CardHeader,
	Typography,
	TextField,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { Request } from "../../types";
import { TimePicker, DateTimePicker } from "@mui/x-date-pickers";
import { StyledAvatar, StyledCard } from "../../components";

interface Props {
	id: number;
	name: string;
	comment: string;
}

const AppointmentCard = ({ id, name, comment }: Props) => {
	const [value, setValue] = useState<Dayjs | null>(
		dayjs("2014-08-18T21:11:54")
	);

	const [duration, setDuration] = useState<Dayjs | null>(dayjs("2022-10-10"));

	return (
		<Grid item xs={4}>
			<StyledCard>
				<CardHeader avatar={<StyledAvatar>A</StyledAvatar>} title={name} />
				<CardContent>
					<Grid container spacing={{ xs: 1.5, md: 2 }}>
						<Grid item xs={12}>
							<Typography
								sx={{ fontSize: 14 }}
								color="text.secondary"
								gutterBottom
							>
								{comment}
							</Typography>
						</Grid>
						<Grid item xs={8}>
							<DateTimePicker
								ampm={false}
								label="Date and time"
								disabled
								value={value}
								onChange={(e) => setValue(e)}
								renderInput={(params: any) => <TextField {...params} />}
							/>
						</Grid>
						<Grid item xs={4}>
							<TimePicker
								ampm={false}
								disabled
								views={["hours", "minutes"]}
								inputFormat="hh:mm"
								mask="__:__"
								label="Duration"
								value={duration}
								onChange={(newValue: any) => {
									setDuration(newValue);
								}}
								renderInput={(params) => <TextField {...params} />}
							/>
						</Grid>
						{/* TODO: if not doctor */}
						<Grid item xs={12}>
							<Typography
								sx={{ fontSize: 14 }}
								color="text.secondary"
								gutterBottom
							>
								Doctor: John Doe
							</Typography>
						</Grid>
					</Grid>
				</CardContent>
				<CardActions>
					<MoreVert />
				</CardActions>
			</StyledCard>
		</Grid>
	);
};

export default AppointmentCard;
