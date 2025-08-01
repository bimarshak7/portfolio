import { useState, useRef } from "react"
import { NavLink, Link } from "react-router-dom"
import { FiMenu, FiX } from "react-icons/fi"

const Nav = ({ theme }) => {
	const [open, setOpen] = useState(false)
	const touchStartX = useRef(null)
	const touchCurrentX = useRef(null)

	const links = [
		"about",
		"contact",
		"skills",
		"experience",
		"achievements",
		"showcase",
	]

	// Swipe open from left edge
	const handleTouchStart = (e) => {
		if (e.touches[0].clientX < 30) {
			touchStartX.current = e.touches[0].clientX
		}
	}
	const handleTouchMove = (e) => {
		touchCurrentX.current = e.touches[0].clientX
	}
	const handleTouchEnd = () => {
		if (
			touchStartX.current !== null &&
			touchCurrentX.current !== null &&
			touchCurrentX.current - touchStartX.current > 60
		) {
			setOpen(true)
		}
		touchStartX.current = null
		touchCurrentX.current = null
	}

	// Swipe close from drawer
	const drawerTouchStartX = useRef(null)
	const drawerTouchCurrentX = useRef(null)
	const handleDrawerTouchStart = (e) => {
		drawerTouchStartX.current = e.touches[0].clientX
	}
	const handleDrawerTouchMove = (e) => {
		drawerTouchCurrentX.current = e.touches[0].clientX
	}
	const handleDrawerTouchEnd = () => {
		if (
			drawerTouchStartX.current !== null &&
			drawerTouchCurrentX.current !== null &&
			drawerTouchStartX.current - drawerTouchCurrentX.current > 60
		) {
			setOpen(false)
		}
		drawerTouchStartX.current = null
		drawerTouchCurrentX.current = null
	}

	return (
		<>
			{/* Hamburger for mobile */}
			<button
				onClick={() => setOpen(true)}
				className="md:hidden fixed top-4 left-4 z-[10001] p-2 rounded-full bg-black/70 text-white shadow-lg focus:outline-none"
				aria-label="Open menu"
			>
				<FiMenu size={28} />
			</button>

			{/* Touch area for swipe open */}
			<div
				className="md:hidden fixed inset-0 z-[9999] pointer-events-auto"
				style={{ touchAction: 'pan-y' }}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			/>

			{/* Drawer menu overlay */}
			{open && (
				<div className="fixed inset-0 z-[10000] bg-black/40 backdrop-blur-sm transition-all" onClick={() => setOpen(false)}>
					<div
						className={`absolute top-0 left-0 h-full w-4/5 max-w-xs ${theme ? 'bg-zinc-900' : 'bg-white/90'} shadow-2xl p-8 flex flex-col gap-6 transition-transform duration-300 ease-in-out ' + (open ? 'translate-x-0' : '-translate-x-full')}`}
						onClick={e => e.stopPropagation()}
						onTouchStart={handleDrawerTouchStart}
						onTouchMove={handleDrawerTouchMove}
						onTouchEnd={handleDrawerTouchEnd}
					>
						<button
							onClick={() => setOpen(false)}
							className="absolute top-3 right-3 p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-700 transition"
							aria-label="Close menu"
						>
							<FiX size={24} />
						</button>
						<div className="flex flex-col gap-4 mt-4">
							{links.map((link, i) => (
								<NavLink
									to={link == "home" ? "" : link}
									key={i}
									className={({ isActive }) =>
										`block text-lg font-bold rounded-lg px-4 py-2 text-center transition-all duration-200
										${isActive ? (theme ? 'bg-green-800/40 text-green-200' : 'bg-blue-200/80 text-blue-700 border border-blue-400') : 'hover:bg-green-100 dark:hover:bg-zinc-800 hover:text-green-700 dark:hover:text-green-200'}`
									}
									onClick={() => setOpen(false)}
								>
									0{i + 1} | {link.charAt(0).toUpperCase() + link.slice(1)}
								</NavLink>
							))}
							<a
								href="https://drive.google.com/file/d/13dnCarlukKw7v6bz9H4UVirrxIk2xYAF/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
								className="block text-lg font-bold rounded-lg px-4 py-2 text-center transition-all duration-200 hover:bg-green-100 dark:hover:bg-zinc-800 hover:text-green-700 dark:hover:text-green-200"
							>
								Resume
							</a>
							<a
								href="https://bimarshak.com.np"
								target="_blank"
								rel="noopener noreferrer"
								className="block text-lg font-bold rounded-lg px-4 py-2 text-center transition-all duration-200 hover:bg-green-100 dark:hover:bg-zinc-800 hover:text-green-700 dark:hover:text-green-200"
							>
								Blog
							</a>
						</div>
					</div>
				</div>
			)}

			{/* Desktop nav */}
			<div className="hidden md:flex flex-col gap-6 text-left">
				<div>
					<Link to="/">
						<h2
							className={`text-xl md:text-2xl font-extrabold drop-shadow mb-2 tracking-wide uppercase text-center cursor-pointer bg-clip-text text-transparent 
				${theme 
					? "bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500" 
					: "bg-gradient-to-r from-blue-700 via-pink-500 to-green-500"}`}
						>
							# Bimarsha Khanal
						</h2>
					</Link>
					<div className="border-b-2 border-green-400 w-2/3 mx-auto mb-4"></div>
				</div>
				<div className="flex flex-col gap-2 md:gap-4 text-xs md:text-lg">
					{links.map((link, i) => (
						<NavLink
							to={link == "home" ? "" : link}
							key={i}
							className={({ isActive, isPending }) =>
								isPending
									? "pending"
								: isActive
									? `relative flex items-center font-bold rounded-lg transition-all duration-200 px-3 py-1
									${theme ? 'text-green-200 bg-green-800/30' : 'text-blue-700 bg-blue-200/80 border border-blue-400'}`
									: "cursor-pointer hover:text-green-500 flex items-center px-3 py-1"
							}
						>
							{({ isActive }) => (
								<span className="flex items-center gap-2 min-h-[2rem]">
									{isActive && <span className={`w-2 h-2 rounded-full mr-2 ${theme ? 'bg-green-300 shadow-lg' : 'bg-blue-500 shadow-md'}`}></span>}
									0{i + 1} | {link.charAt(0).toUpperCase() + link.slice(1)}
								</span>
							)}
						</NavLink>
					))}
					<span className="flex items-center font-bold rounded-lg transition-all duration-200 cursor-pointer hover:text-green-500 gap-2 px-3 py-1 min-h-[2rem] ml-0">
						{/* Invisible dot for alignment, but remove margin to match others */}
						<span className="w-2 h-2 mr-2 opacity-0" />
						07 |{" "}
						<a
							href="https://drive.google.com/file/d/13dnCarlukKw7v6bz9H4UVirrxIk2xYAF/view?usp=sharing"
							target="new"
						>
							Resume
						</a>
					</span>
					<span className="flex items-center font-bold rounded-lg transition-all duration-200 cursor-pointer hover:text-green-500 gap-2 px-3 py-1 min-h-[2rem] ml-0">
						<span className="w-2 h-2 mr-2 opacity-0" />
						08 |{" "}
						<a href="https://bimarshak.com.np" target="new">
							Blog
						</a>
					</span>
				</div>
			</div>
		</>
	)
}

export default Nav
