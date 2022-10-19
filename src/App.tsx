import { Container, CssBaseline, styled, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { NavigationOutlet, RequireAuth } from "./components";
import {
	Home,
	SignIn,
	SignUp,
	RestorePassword,
	Unauthorized,
	Account,
	Calendar,
	Appointments,
	Requests,
	Request,
	AddRequest,
	NotFound,
} from "./pages";
import { gapi } from "gapi-script";
import config from "./config.json";
import { useEffect } from "react";

const StyledContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	height: "100vh",
	width: "100vw",
}));

const App = () => {
	//add gapi

	return (
		<StyledContainer>
			<Routes>
				<Route path="/">
					{/* public routes */}
					<Route index element={<Home />} />
					<Route path="signin" element={<SignIn />} />
					<Route path="signup" element={<SignUp />} />
					{/* <Route path="restore" element={<RestorePassword />} /> */}
					<Route path="Unauthorized" element={<Unauthorized />} />

					{/* private routes */}
					<Route element={<RequireAuth allowedUserType={[]} />}>
						<Route path="account" element={<Account />} />

						<Route path="calendar" element={<Calendar />} />
						<Route path="appointments">
							<Route index element={<Appointments />} />
							{/* <Route path=":id" element={<Appointment />} />
							<Route path="create" element={<AddAppointment />} /> */}
						</Route>
						<Route path="requests">
							<Route index element={<Requests />} />
							<Route path=":id" element={<Request />} />
							<Route path="create" element={<AddRequest />} />
						</Route>
					</Route>

					{/* catch all */}
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</StyledContainer>
	);
};

export default App;
