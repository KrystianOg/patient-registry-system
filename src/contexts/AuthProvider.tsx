import { createContext, useState } from "react";
import { IAuthContext } from "../types";

type AuthContextUseState = {
	auth: IAuthContext | undefined;
	setAuth: (auth: IAuthContext | undefined) => void;
};

const AuthContext = createContext<AuthContextUseState>(
	{} as AuthContextUseState
);

type Props = {
	children: React.ReactNode | React.ReactNode[];
};

const AuthProvider = ({ children }: Props) => {
	const [auth, setAuth] = useState<IAuthContext | undefined>(undefined);

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
export { AuthContext };
