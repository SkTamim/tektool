import "./assets/css/main.css";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

import Home from "./pages/home/Home";
import BoxShadows from "./pages/shadows/boxShadows/BoxShadows";
import TextShadows from "./pages/shadows/textShadows/TextShadows";
import HtmlEntities from "./pages/entities/htmlEntities/HtmlEntities";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import Resources from "./pages/resources/Resources";
import Learn from "./pages/learn/Learn";

function App() {
	return (
		<>
			<StyledEngineProvider injectFirst>
				<CssBaseline />

				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/resources' element={<Resources />} />
					<Route path='/shadows' element={<BoxShadows />} />
					<Route path='/text-shadows' element={<TextShadows />} />
					<Route path='/entities' element={<HtmlEntities />} />
					<Route path='/learn' element={<Learn />} />
				</Routes>
				<Footer />
			</StyledEngineProvider>
		</>
	);
}

export default App;
