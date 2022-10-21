import { useLocation, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { selectIsAuthenticated } from "../features/authSlice";
import { useAppSelector } from "../hooks/useStore";
import type { UserType } from "../types/User";
import { SlideInNav } from "../components";
interface IProps {
	allowedUserType?: UserType[];
}

const PrivateOutlet = ({ allowedUserType }: IProps) => {
	const location = useLocation();
	const isAuthenticated = useAppSelector(selectIsAuthenticated);

	return (
		// allowedUserType?.includes(
		// 	auth?.user?.type as NonNullable<UserType>
		// ) ?
		<>
			<Navbar />
			<SlideInNav />
			<Outlet />

			{/* <Footer /> */}
		</>
	);
	// : (
	// 	<Navigate to="/signin" state={{ from: location }} replace />
	// );
};

export default PrivateOutlet;
