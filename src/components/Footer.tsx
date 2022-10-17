import { useLocation } from "react-router-dom";

const excludedLocations = ["/signin", "/signup", "/restore"];

const Footer = () => {
	const location = useLocation();

	if (excludedLocations.includes(location.pathname)) return null;

	return <div>Footer</div>;
};

export default Footer;
