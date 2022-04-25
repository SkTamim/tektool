import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, StyledEngineProvider, Toolbar } from "@mui/material";

import Home from "./pages/home/Home";
import Resources from "./pages/resources/Resources";
import Shadows from "./pages/shadows/Shadows";
import Entities from "./pages/entities/Entities";
import Learn from "./pages/learn/Learn";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import BackToTop from "./components/backToTop/BackToTop";

function App() {
	return (
		<>
			<StyledEngineProvider injectFirst>
				<CssBaseline />
				<Toolbar id='back-to-top-anchor' />
				<Navbar />
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/resources' element={<Resources />} />
						<Route path='/shadows' element={<Shadows />} />
						<Route path='/entities' element={<Entities />} />
						<Route path='/learn' element={<Learn />} />
					</Routes>
				</main>
				<Footer />
				<BackToTop />
			</StyledEngineProvider>
		</>
	);
}

export default App;
