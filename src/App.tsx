import { Box, styled } from "@mui/material";
import { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { NavigationOutlet, RequireAuth, Loading } from "./components";
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

const StyledContainer = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	height: "100vh",
	width: "100vw",
}));

const App = () => {
	//add gapi

	useEffect(() => {
		const initClient = () => {
			gapi.client.init({
				clientId: config.google_clientId,
				scope: "",
			});
			gapi.load("client:auth2", initClient);
		};
	});

	return (
		<StyledContainer>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path="/">
						{/* public routes */}
						<Route element={<NavigationOutlet />}>
							<Route index element={<Home />} />
						</Route>
						<Route path="signin" element={<SignIn />} />
						<Route path="signup" element={<SignUp />} />
						<Route path="restore" element={<RestorePassword />} />
						<Route path="Unauthorized" element={<Unauthorized />} />

						{/* private routes */}
						<Route element={<RequireAuth />}>
							<Route path="account" element={<Account />} />
							<Route path="calendar" element={<Calendar />} />
							<Route path="appointments" element={<Appointments />} />
							<Route path="requests">
								<Route index element={<Requests />} />
								<Route path=":id" element={<Request />} />
								<Route path="create" element={<AddRequest />} />
							</Route>
						</Route>

						{/* catch all */}
						<Route element={<NavigationOutlet />}>
							<Route path="*" element={<NotFound />} />
						</Route>
					</Route>
				</Routes>
			</Suspense>
		</StyledContainer>
	);
};

export default App;
