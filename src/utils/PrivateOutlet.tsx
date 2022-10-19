import { Suspense } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { Loading } from "../components";
import Navbar from "../components/Navbar";
import { selectIsAuthenticated } from "../features/authSlice";
import { useAppSelector } from "../hooks/useStore";
import type { UserType } from "../types/User";

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
			<Suspense fallback={<Loading />}>
				<Outlet />
			</Suspense>
			{/* <Footer /> */}
		</>
	);
	// : (
	// 	<Navigate to="/signin" state={{ from: location }} replace />
	// );
};

export default PrivateOutlet;
