import { Stack, Typography } from "@mui/material";
import { SlideInNav } from "../components";

const Home = () => {
	return (
		<Stack>
			<SlideInNav />
			<Typography>Some component presentation</Typography>
			<p>Appointment Card</p>
			<p>Request Card</p>
			<p>Browsable patient's history</p>
			<p>calendar</p>
			<p>404 not found</p>
			<p>sign in & sign up</p>
			<p>introduce JWT</p>
			<p>introduce Redux</p>
			<p>RTK Query</p>
			<p>Redux thunk</p>
			<p>Redux persist</p>
		</Stack>
	);
};

export default Home;
