import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const NavigationOutlet = () => {
	return (
		<>
			<Navbar />
			<Outlet />

			{/* <Footer /> */}
		</>
	);
};

export default NavigationOutlet;
