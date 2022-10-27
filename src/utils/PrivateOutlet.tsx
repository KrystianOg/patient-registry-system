import { useLocation, Outlet, redirect, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
//import { selectIsAuthenticated } from "../features/authSlice";
import { useAppSelector } from "../hooks/useStore";
import type { UserType } from "../types/User";
import { SlideInNav } from "../components";
import {
	selectCurrentUser,
	selectIsAuthenticated,
} from "../features/authSlice";

interface IProps {
	allowedUserType: UserType[];
}

const PrivateOutlet = ({ allowedUserType }: IProps) => {
	const isAuthenticated = useAppSelector(selectIsAuthenticated);
	const user = useAppSelector(selectCurrentUser);
	return isAuthenticated ? (
		<>
			{user?.types.some((t) => allowedUserType.includes(t)) && (
				<>
					<Navbar />
					{/* <SlideInNav /> */}
					<Outlet />
				</>
			)}
		</>
	) : (
		<Navigate to="/signin" replace />
	);
};

export default PrivateOutlet;
