import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline, StyledEngineProvider, Toolbar } from "@mui/material";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

//Pages
import Home from "./pages/home/Home";
import Resources from "./pages/resources/Resources";
import Learn from "./pages/learn/Learn";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import BackToTop from "./components/backToTop/BackToTop";

// Box Shadow Pages
import BoxShadows from "./pages/shadows/boxShadows/BoxShadows";
import LightBoxShadows from "./pages/shadows/boxShadows/LightBoxShadows";
import DarkBoxShadows from "./pages/shadows/boxShadows/DarkBoxShadows";
import InsetBoxShadows from "./pages/shadows/boxShadows/InsetBoxShadows";
import ColoredBoxShadows from "./pages/shadows/boxShadows/ColoredBoxShadows";

//Text Shadow
import TextShadows from "./pages/shadows/textShadows/TextShadows";

// HTML Entity Pages
import HtmlEntities from "./pages/entities/htmlEntities/HtmlEntities";
import Symbols from "./pages/entities/htmlEntities/Symbols";
import Arrows from "./pages/entities/htmlEntities/Arrows";
import Currency from "./pages/entities/htmlEntities/Currency";
import Punctuation from "./pages/entities/htmlEntities/Punctuation";
import Math from "./pages/entities/htmlEntities/Math";
import Numbers from "./pages/entities/htmlEntities/Numbers";
import Letters from "./pages/entities/htmlEntities/Letters";

// Emoji Entity Pages
import EmojiEntities from "./pages/entities/emojiEntities/EmojiEntities";
import Face from "./pages/entities/emojiEntities/Face";
import Gesture from "./pages/entities/emojiEntities/Gesture";
import People from "./pages/entities/emojiEntities/People";
import Hart from "./pages/entities/emojiEntities/Hart";
import Sport from "./pages/entities/emojiEntities/Sport";
import Nature from "./pages/entities/emojiEntities/Nature";
import Animal from "./pages/entities/emojiEntities/Animal";
import FoodDrink from "./pages/entities/emojiEntities/FoodDrink";
import Objects from "./pages/entities/emojiEntities/Objects";
import Symbol from "./pages/entities/emojiEntities/Symbol";
import Vehicle from "./pages/entities/emojiEntities/Vehicle";
import Flags from "./pages/entities/emojiEntities/Flags";

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
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/resources' element={<Resources />} />

					<Route path='/box-shadows' element={<BoxShadows />}>
						<Route index element={<Navigate to='light' replace />} />
						<Route
							path='light'
							element={<LightBoxShadows shadowType='Light' />}
						/>
						<Route path='dark' element={<DarkBoxShadows shadowType='Dark' />} />
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

					<Route path='/html-entities' element={<HtmlEntities />}>
						<Route index element={<Navigate to='symbols' replace />} />
						<Route path='symbols' element={<Symbols entityType='Symbols' />} />
						<Route path='arrows' element={<Arrows entityType='Arrows' />} />
						<Route
							path='currency'
							element={<Currency entityType='Currency' />}
						/>
						<Route
							path='punctuation'
							element={<Punctuation entityType='Punctuation' />}
						/>
						<Route path='math' element={<Math entityType='Math' />} />
						<Route path='numbers' element={<Numbers entityType='Numbers' />} />
						<Route path='letters' element={<Letters entityType='Letters' />} />
					</Route>

					<Route path='/emoji-entities' element={<EmojiEntities />}>
						<Route index element={<Navigate to='face' replace />} />
						<Route path='face' element={<Face entityType='Face' />} />
						<Route path='gesture' element={<Gesture entityType='Gesture' />} />
						<Route path='people' element={<People entityType='People' />} />
						<Route path='hart' element={<Hart entityType='Hart' />} />
						<Route path='sport' element={<Sport entityType='Sport' />} />
						<Route path='nature' element={<Nature entityType='Nature' />} />
						<Route path='animal' element={<Animal entityType='Animal' />} />
						<Route
							path='food-drink'
							element={<FoodDrink entityType='Food & Drink' />}
						/>
						<Route path='objects' element={<Objects entityType='Object' />} />
						<Route path='symbol' element={<Symbol entityType='Symbol' />} />
						<Route path='vehicle' element={<Vehicle entityType='Vehicle' />} />
						<Route path='flags' element={<Flags entityType='Flag' />} />
					</Route>

					<Route path='/learn' element={<Learn />} />
				</Routes>
				<Footer handleNavActive={handleNavActive} />
				<BackToTop />
				<Toaster position='bottom-left' reverseOrder={false} />
			</StyledEngineProvider>
		</>
	);
}

export default App;
