/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layouts from "./components/Layouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Stores from "./pages/Stores";
import Blog from "./pages/Blog";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layouts />}>
						<Route index element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/careers' element={<Careers />} />
						<Route path='/stores' element={<Stores />} />
						<Route path='/blog' element={<Blog />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
