import "./assets/css/main.css";
import { Routes, Route } from "react-router-dom";
import BoxShadows from "./components/BoxShadows";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TextShadows from "./components/TextShadows";
import BackToTop from "./components/BackToTop";
import Home from "./components/Home";
import HtmlEntities from "./components/HTML Entities/HtmlEntities";
function App() {
	return (
		<>
			<div id='top'></div>

			<Header />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/' element={<BoxShadows />} />
				<Route path='/text-shadows' element={<TextShadows />} />
				<Route path='/html-entities' element={<HtmlEntities />} />
			</Routes>
			{/* <BoxShadows />
			<TextShadows /> */}
			<Footer />
			<BackToTop />
		</>
	);
}

export default App;
