import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline, StyledEngineProvider, Toolbar } from "@mui/material";
import { useState } from "react";

import Home from "./pages/home/Home";
import Resources from "./pages/resources/Resources";
import Learn from "./pages/learn/Learn";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import BackToTop from "./components/backToTop/BackToTop";
import TextShadows from "./pages/shadows/textShadows/TextShadows";
import BoxShadows from "./pages/shadows/boxShadows/BoxShadows";
import EmojiEntities from "./pages/entities/emojiEntities/EmojiEntities";
import HtmlEntities from "./pages/entities/htmlEntities/HtmlEntities";
import LightBoxShadows from "./pages/shadows/boxShadows/LightBoxShadows";
import DarkBoxShadows from "./pages/shadows/boxShadows/DarkBoxShadows";
import InsetBoxShadows from "./pages/shadows/boxShadows/InsetBoxShadows";
import ColoredBoxShadows from "./pages/shadows/boxShadows/ColoredBoxShadows";

function App() {
	const [navActive, setNavActive] = useState("");
	const handleNavActive = () => {
		var currentDateTime = new Date();
		setNavActive(currentDateTime.getTime());
	};
	return (
		<>
			<StyledEngineProvider injectFirst>
				<CssBaseline />
				<Toolbar id='back-to-top-anchor' />
				<Navbar navActive={navActive} />
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/resources' element={<Resources />} />
						<Route path='/box-shadows' element={<BoxShadows />}>
							<Route index element={<Navigate to='light' replace />} />
							<Route
								path='light'
								element={<LightBoxShadows shadowType='Light' />}
							/>
							<Route
								path='dark'
								element={<DarkBoxShadows shadowType='Dark' />}
							/>
							<Route
								path='inset'
								element={<InsetBoxShadows shadowType='Inset' />}
							/>
							<Route
								path='colored'
								element={<ColoredBoxShadows shadowType='Colored' />}
							/>
						</Route>
						<Route path='/text-shadows' element={<TextShadows />} />
						<Route path='/html-entities' element={<HtmlEntities />} />
						<Route path='/emoji-entities' element={<EmojiEntities />} />
						<Route path='/learn' element={<Learn />} />
					</Routes>
				</main>
				<Footer handleNavActive={handleNavActive} />
				<BackToTop />
			</StyledEngineProvider>
		</>
	);
}

export default App;
