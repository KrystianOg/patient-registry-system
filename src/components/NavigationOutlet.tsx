import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Loading } from "../components";
import { Suspense } from "react";

const NavigationOutlet = () => {
	return (
		<>
			<Navbar />
			<Suspense fallback={<Loading />}>
				<Outlet />
			</Suspense>
			{/* <Footer /> */}
		</>
	);
};

export default NavigationOutlet;
