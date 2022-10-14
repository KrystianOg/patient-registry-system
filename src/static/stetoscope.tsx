import { useTheme } from "@mui/material";

interface IProps {
	width?: number;
	height?: number;
	color?: string;
}

const Stetoscope = ({ width = 24, height = 24, color }: IProps) => {
	const theme = useTheme();
	color = color ? color : theme.palette.text.primary;
	return (
		<svg
			width={width}
			height={height}
			viewBox="-2 -2 24 24"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMinYMin"
			className="jam jam-medical"
			fill={color}
		>
			<path d="M7 12.917v.583a4.5 4.5 0 1 0 9 0v-1.67a3.001 3.001 0 1 1 2 0v1.67a6.5 6.5 0 1 1-13 0v-.583A6.002 6.002 0 0 1 0 7V2a2 2 0 0 1 2-2h1a1 1 0 1 1 0 2H2v5a4 4 0 1 0 8 0V2H9a1 1 0 1 1 0-2h1a2 2 0 0 1 2 2v5a6.002 6.002 0 0 1-5 5.917zM17 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
		</svg>
	);
};

export default Stetoscope;