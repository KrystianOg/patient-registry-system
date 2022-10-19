import { PaletteMode } from "@mui/material";
import {
	createTheme,
	ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { createContext, useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";

type Props = {
	children: React.ReactNode | React.ReactNode[];
};

// prettier-ignore
const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === "light"
			? {
				// palette values for light mode
				background: {
					default: "#F8FBFF",
					paper: "#ebf3ff",
				},
				primary: {
					main: "#33B9F2",
					light: "#7DD2F7",
					dark: "#085A7D",
				},
				secondary: {
					main: "#FF4D6D",
					light: "#FF8FA3",
					dark: "#A4133C",
				},
				text: {
					primary: "#000000",
					secondary: "#333333",
				},
			}
			: {
				// palette values for dark mode
				background: {
					default: "#000c14",
					paper: "#00111C",
				},
				primary: {
					main: "#48CAE4",
					light: "#ADE8F4",
					dark: "#0096C7",
				},
				secondary: {
					main: "#70E000",
					light: "#CCFF33",
					dark: "#008000",
				},
				text: {
					primary: "#ffffff",
					secondary: "#dddddd",
				},
			}
		),
	},
});

const ColorModeContext = createContext({ toggleColorMode: () => {} }); // eslint-disable-line

const ThemeProvider = ({ children }: Props) => {
	const [mode, setMode] = useLocalStorage<PaletteMode>("color-mode", "light");

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode: PaletteMode) =>
					prevMode === "light" ? "dark" : "light"
				);
			},
		}),
		[]
	);

	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default ThemeProvider;

export { ColorModeContext };
