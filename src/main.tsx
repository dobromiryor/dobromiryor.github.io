import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import { GameProvider } from "./providers/game-provider";
import { GravityProvider } from "./providers/gravity-provider";
import { ObserverProvider } from "./providers/observer-provider";
import { ThemeProvider } from "./providers/theme-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<ObserverProvider>
				<GravityProvider>
					<GameProvider>
						<App />
					</GameProvider>
				</GravityProvider>
			</ObserverProvider>
		</ThemeProvider>
	</StrictMode>
);
