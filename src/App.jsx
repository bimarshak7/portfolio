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
			className={`relative w-full min-h-screen overflow-x-hidden ${
				theme
				? "bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white backdrop-blur-xl backdrop-saturate-200 border border-white/10 shadow-2xl"
				: "bg-gradient-to-br from-green-200 via-blue-100 to-yellow-100 text-gray-900"
			}`}
		>
			{/* Theme Switch Button - always visible at top right */}
			<div
				className={`fixed top-4 right-4 z-[10001] cursor-pointer rounded-full p-1 md:p-2 shadow-lg border transition-colors duration-200 ${
					theme ? "bg-black/80 text-white border-white" : "bg-white/80 text-black border-black"
				}`}
				onClick={e => setTheme(!theme)}
				style={{ pointerEvents: 'auto' }}
			>
				{theme ? (
					<MdDarkMode className="w-5 h-5 md:w-7 md:h-7" />
				) : (
					<MdOutlineDarkMode className="w-5 h-5 md:w-7 md:h-7" />
				)}
			</div>
			<div className="w-full flex md:hidden justify-center items-center pt-4 pb-2">
				<h2
					className={`text-xl font-extrabold drop-shadow tracking-wide uppercase text-center cursor-pointer bg-clip-text text-transparent \
					${theme 
						? "bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500" 
						: "bg-gradient-to-r from-blue-700 via-pink-500 to-green-500"}`}
				>
					# Bimarsha Khanal
				</h2>
			</div>
			<Router>
				<div className="flex flex-row w-full min-h-screen items-center justify-center">
					<div
						className={`flex flex-col justify-center items-center md:border-r md:pr-6 md:mr-2 ${
							theme ? "md:border-white" : "md:border-black"
						} h-full pt-8 px-2`}
					>
						<Nav theme={theme}/>
					</div>
					<div className="w-full md:w-1/2 flex items-start px-2 md:pl-8 pt-4 custom-scrollbar overflow-y-auto" style={{ minHeight: '60vh' }}>
						<div className="w-full">
							<Routes>
								<Route path="/" element={<Home theme={theme}/>} />
								<Route path="/about" element={<About theme={theme}/>} />
								<Route path="/skills" element={<Skills theme={theme}/>} />
								<Route path="/contact" element={<Contact theme={theme}/>} />
								<Route path="/experience" element={<Experience theme={theme}/>} />
								<Route path="/achievements" element={<Achievements theme={theme}/>} />
								<Route path="/showcase" element={<Showcase theme={theme}/>} />
							</Routes>
						</div>
					</div>
				</div>
			</Router>
		</div>
	)
}

export default App
