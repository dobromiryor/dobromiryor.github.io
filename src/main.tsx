import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import { GravityProvider } from "./providers/gravity-provider";
import { ObserverProvider } from "./providers/observer-provider";
import { ThemeProvider } from "./providers/theme-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider>
			<ObserverProvider>
				<GravityProvider>
					<App />
				</GravityProvider>
			</ObserverProvider>
		</ThemeProvider>
	</React.StrictMode>
);
