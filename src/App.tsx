import { Route, Router, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

import { Footer } from "./components/Footer";
import { Nnnoise } from "./components/Nnnoise";
import { ScrollRestoration } from "./components/ScrollRestoration";
import { Route as RouteEnum } from "./enums/route.enum";
import { CV } from "./routes/CV";
import { Home } from "./routes/Home";

function App() {
	return (
		<Router hook={useHashLocation}>
			<div className="relative min-h-screen">
				<div className="flex justify-center pb-40 print:pb-0">
					<Switch>
						<Route component={Home} path={RouteEnum.HOME} />
						<Route component={CV} path={RouteEnum.CV} />
					</Switch>
				</div>
				<Footer />
				<Nnnoise />

				<ScrollRestoration />
			</div>
		</Router>
	);
}

export default App;
