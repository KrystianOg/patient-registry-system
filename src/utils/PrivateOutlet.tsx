import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import type { UserType } from "../types/User";

interface IProps {
	allowedUserType?: UserType[];
}

const RequireAuth = ({ allowedUserType }: IProps) => {
	const { auth } = useAuth();
	const location = useLocation();

	return allowedUserType?.includes(
		auth?.user?.type as NonNullable<UserType>
	) ? (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	) : (
		<Navigate to="/signin" state={{ from: location }} replace />
	);
};

export default RequireAuth;
