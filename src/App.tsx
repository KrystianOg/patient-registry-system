import { Container, styled, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Loading, NavigationOutlet, RequireAuth } from "./components";
import {
	Home,
	SignIn,
	SignUp,
	RestorePassword,
	Unauthorized,
	Account,
	Appointments,
	AddAppointment,
	Requests,
	Request,
	AddRequest,
	NotFound,
} from "./pages";
import { gapi } from "gapi-script";
import config from "./config.json";
import { Suspense, useEffect } from "react";
import WithNav from "./components/Navbar/WithNav";
import { UserType } from "./types";

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "72px",
	backgroundColor: theme.palette.background.default,
	height: "100vh",
	maxWidth: "100vw!important",
	padding: "8px",
}));

const App = () => {
	//add gapi
	useEffect(() => {
		const initClient = () => {
			gapi.client.init({
				clientId: config.GOOGLE_CLIENT_ID,
				scope: "",
			});
			gapi.load("client:auth2", initClient);
		};
	});

	return (
		<StyledContainer>
			<Container maxWidth="md">
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path="/" element={<WithNav />}>
							{/* public routes */}
							<Route index element={<Home />} />
							<Route path="signin" element={<SignIn />} />
							<Route path="signup" element={<SignUp />} />
							{/* <Route path="restore" element={<RestorePassword />} /> */}
							<Route path="Unauthorized" element={<Unauthorized />} />

							{/* private routes */}
							<Route
								element={
									<RequireAuth
										allowedUserType={[UserType.PATIENT, UserType.DOCTOR]}
									/>
								}
							>
								<Route path="account" element={<Account />} />

								<Route path="appointments">
									<Route index element={<Appointments />} />
									<Route
										element={
											<RequireAuth allowedUserType={[UserType.DOCTOR]} />
										}
									>
										<Route path="create" element={<AddAppointment />} />
									</Route>
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
				</Suspense>
			</Container>
		</StyledContainer>
	);
};

export default App;
