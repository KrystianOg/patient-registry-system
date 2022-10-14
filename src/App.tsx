import { Container, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer, RequireAuth } from "./components";
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

const App = () => {
	return (
		<>
			<Navbar />

			<CssBaseline />
			<Container>
				<Routes>
					<Route path="/">
						{/* public routes */}
						<Route index element={<Home />} />
						<Route path="signin" element={<SignIn />} />
						<Route path="signup" element={<SignUp />} />
						<Route path="restore" element={<RestorePassword />} />
						<Route path="Unauthorized" element={<Unauthorized />} />

						{/* private routes */}
						<Route element={<RequireAuth roles={[]} />}>
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
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</Container>
			<Footer />
		</>
	);
};

export default App;
