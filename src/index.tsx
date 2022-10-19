import React from "react";
import ReactDOM from "react-dom/client";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import "./index.css";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./contexts/AuthProvider";
import ThemeProvider from "./contexts/ThemeProvider";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./app/store";

if (process.env.NODE_ENV === "production") {
	disableReactDevTools();
}

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<ReduxProvider store={store}>
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
		</ReduxProvider>
	</React.StrictMode>
);
