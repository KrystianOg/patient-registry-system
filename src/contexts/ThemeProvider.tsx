import { PaletteMode } from "@mui/material";
import {
	createTheme,
	ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { createContext, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

type Props = {
	children: React.ReactNode | React.ReactNode[];
};

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
			  }),
	},
});

const ColorModeContext = createContext({ toggleColorMode: () => {} });

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
