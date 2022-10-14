import BottomNav from "./Navbar/BottomNav";
import SideNav from "./Navbar/SideNav";
import { useWindowSize } from "usehooks-ts";
import { useLocation } from "react-router-dom";

const excludedLocations = ["/signin", "/signup", "/restore", "/Unauthorized"];

const Navbar = () => {
	const { width } = useWindowSize();
	const location = useLocation();

	// prevents navbar from rendering on excluded locations
	if (excludedLocations.includes(location.pathname)) return null;

	return <>{width > 768 ? <SideNav /> : <BottomNav />}</>;
};

export default Navbar;
