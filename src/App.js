import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Certificates from "./pages/certificates";
import Curses from "./pages/curses";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

// import { useSelector } from "react-redux";
// import { selectTheme } from "./components/theme/themeSlice";
import { LanguageProvider } from "../src/components/language/LanguageContext";

export const STYLES = {
	light: {
		"--background": "#fff",
	},
	dark: {
		"--background": "#fbb",
	},
};

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	// const theme = useSelector(selectTheme);
	// const style = STYLES[theme];

	return (
		<LanguageProvider>
			<div className="App">
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/certificates" element={<Certificates />} />
					<Route path="/curses" element={<Curses />} />
					<Route path="/article/:slug" element={<ReadArticle />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</div>
		</LanguageProvider>
	);
}

export default App;
