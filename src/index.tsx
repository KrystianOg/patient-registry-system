import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<SnackbarProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</SnackbarProvider>
		</HelmetProvider>
	</React.StrictMode>
);
