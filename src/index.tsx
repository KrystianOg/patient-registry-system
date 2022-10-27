import React from "react";
import ReactDOM from "react-dom/client";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import "./index.css";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useChainProviders } from "react-flat-providers";
import ThemeProvider from "./contexts/ThemeProvider";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./app/store";

if (process.env.NODE_ENV === "production") {
	disableReactDevTools();
}

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

//use chain providers to prevent deep providers nesting
const ChainedProviders = useChainProviders()
	.add(React.StrictMode)
	.add(ReduxProvider, { store: store })
	.add(HelmetProvider)
	.add(ThemeProvider)
	.add(SnackbarProvider)
	.add(BrowserRouter)
	.make();

root.render(
	<ChainedProviders>
		<App />
	</ChainedProviders>
);
