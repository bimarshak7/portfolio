import { useState } from "react"
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md"
import { HashRouter as Router } from "react-router-dom"
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
			className={`relative w-screen h-screen overflow-x-hidden ${
				theme ? "bg-black text-white" : "bg-zinc-200 text-black"
			}`}
		>
			{/* Theme Switch Button - always visible at top right */}
			<div
				className={`fixed top-4 right-4 z-[9999] cursor-pointer rounded-full p-2 shadow-lg border transition-colors duration-200 ${
					theme ? "bg-black/80 text-white border-white" : "bg-white/80 text-black border-black"
				}`}
				onClick={e => setTheme(!theme)}
			>
				{theme ? (
					<MdDarkMode fontSize={28} />
				) : (
					<MdOutlineDarkMode fontSize={28} />
				)}
			</div>
			<Router>
				<div className="flex flex-row w-full min-h-screen items-center justify-center">
					<div
						className={`flex flex-col justify-center items-center border-r pr-6 mr-2 ${
							theme ? "border-white" : "border-black"
						} h-full pt-8 px-4`}
					>
						<Nav />
					</div>
					<div className="w-1/2 flex items-start min-h-[60vh] pl-8 overflow-auto pt-4 custom-scrollbar" style={{ maxHeight: '80vh' }}>
						<Routes>
							<Route path="/" element={<Home theme={theme}/>} />
							<Route path="/about" element={<About />} />
							<Route path="/skills" element={<Skills />} />
							<Route path="/contact" element={<Contact />} />
							<Route
								path="/experience"
								element={<Experience />}
							/>
							<Route
								path="achievements"
								element={<Achievements />}
							/>
							<Route path="showcase" element={<Showcase />} />
						</Routes>
					</div>
				</div>
			</Router>
		</div>
	)
}

export default App
