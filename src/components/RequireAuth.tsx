import { useLocation, Navigate, Outlet } from "react-router-dom";
//import { useAuth } from "../hooks";

interface IProps {
	roles?: number[];
}

const RequireAuth = ({ roles }: IProps) => {
	//const { auth } = useAuth();
	const location = useLocation();

	//change to this
	// auth?roles?.find(role=>allowedRoles?.includes(role))

	return <></>;

	// return auth?.refreshToken ? (
	// 	<Outlet />
	// ) : (
	// 	<Navigate to="/signin" state={{ from: location }} replace />
	// );
};

export default RequireAuth;
