import BottomNav from "./Navbar/BottomNav";
import SideNav from "./Navbar/SideNav";
import { useWindowSize } from "usehooks-ts";

const Navbar = () => {
	const { width } = useWindowSize();

	return <>{width > 768 ? <SideNav /> : <BottomNav />}</>;
};

export default Navbar;
