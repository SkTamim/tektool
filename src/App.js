import "./assets/css/main.css";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

import Home from "./pages/home/Home";
import BoxShadows from "./pages/shadows/boxShadows/BoxShadows";
import TextShadows from "./pages/shadows/textShadows/TextShadows";
import HtmlEntities from "./pages/entities/htmlEntities/HtmlEntities";
import BackToTop from "./components/backToTop/BackToTop";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<>
			<StyledEngineProvider injectFirst>
				<CssBaseline />

				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/shadows' element={<BoxShadows />} />
					<Route path='/text-shadows' element={<TextShadows />} />
					<Route path='/html-entities' element={<HtmlEntities />} />
				</Routes>
				<Footer />
			</StyledEngineProvider>
		</>
	);
}

export default App;
