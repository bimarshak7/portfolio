import { useState } from "react"
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md"
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"

import "./App.css"
import Nav from "./components/Nav"
import {
	Home,
	About,
	Contact,
	Experience,
	Showcase,
	Skills,
	Achievements,
} from "./components/Pages1"

function App() {
	const [theme, setTheme] = useState(true)

	return (
		<div
			className={`w-screen h-screen ${
				theme ? "bg-black text-white" : "bg-slate-100 text-black"
			}`}
		>
			<div
				className="pr-16 py-8 float-right cursor-pointer"
				onClick={e => setTheme(!theme)}
			>
				{theme ? (
					<MdDarkMode fontSize={28} />
				) : (
					<MdOutlineDarkMode fontSize={28} />
				)}
			</div>
			<BrowserRouter>
				<div className="flex flex-row gap-2 md:gap-12 md:text-2xl centered-div w-full h-min lg:w-4/6 md:pl-8 pl-2">
					<div
						className={`md:w-2/3 md:pr-6 sm:pr-2 border-r ${
							theme ? "border-white" : "border-black"
						}`}
					>
						<Nav />
					</div>
					<div className="w-full">
						<Routes>
							<Route path="" element={<Home />} />
							<Route path="about" element={<About />} />
							<Route path="skills" element={<Skills />} />
							<Route path="contact" element={<Contact />} />
							<Route path="experience" element={<Experience />} />
							<Route
								path="achievements"
								element={<Achievements />}
							/>
							<Route path="showcase" element={<Showcase />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
