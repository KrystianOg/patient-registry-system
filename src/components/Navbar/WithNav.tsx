import { Outlet } from "react-router-dom";
import SlideInNav from "./SlideInNav";

const WithNav = () => {
	return (
		<>
			<SlideInNav />
			<Outlet />
		</>
	);
};

export default WithNav;
