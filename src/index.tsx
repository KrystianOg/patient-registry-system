import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./contexts/AuthProvider";
import ThemeProvider from "./contexts/ThemeProvider";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<AuthProvider>
			<HelmetProvider>
				<ThemeProvider>
					<SnackbarProvider>
						<BrowserRouter>
							<App />
						</BrowserRouter>
					</SnackbarProvider>
				</ThemeProvider>
			</HelmetProvider>
		</AuthProvider>
	</React.StrictMode>
);
