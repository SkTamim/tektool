import "./assets/css/main.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import BoxShadows from "./pages/shadows/boxShadows/BoxShadows";
import TextShadows from "./pages/shadows/textShadows/TextShadows";
import HtmlEntities from "./pages/entities/htmlEntities/HtmlEntities";
import BackToTop from "./components/backToTop/BackToTop";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<>
			<div id='top'></div>

			<NavBar />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/' element={<BoxShadows />} />
				<Route path='/text-shadows' element={<TextShadows />} />
				<Route path='/html-entities' element={<HtmlEntities />} />
			</Routes>
			<Footer />
			<BackToTop />
		</>
	);
}

export default App;
