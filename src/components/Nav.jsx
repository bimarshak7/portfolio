import { NavLink, Link } from "react-router-dom"

const Nav = ({ theme }) => {
	const links = [
		"about",
		"contact",
		"skills",
		"experience",
		"achievements",
		"showcase",
	]

	return (
		<div className="flex flex-col gap-6 text-left md:pl-4">
			<div>
				<Link to="/">
					<h2
						className={`text-2xl md:text-3xl font-extrabold drop-shadow mb-2 tracking-wide uppercase text-center cursor-pointer bg-clip-text text-transparent 
		${theme 
			? "bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-500" 
			: "bg-gradient-to-r from-blue-700 via-pink-500 to-green-500"}`}
					>
						Bimarsha Khanal
					</h2>
				</Link>
				<div className="border-b-2 border-green-400 w-2/3 mx-auto mb-4"></div>
			</div>
			<div className="flex flex-col gap-2 md:gap-4 text-sm md:text-xl">
				{links.map((link, i) => {
					return (
						<NavLink
							to={link == "home" ? "" : link}
							key={i}
							className={({ isActive, isPending }) =>
								isPending
									? "pending"
									: isActive
									? "active"
									: "cursor-pointer hover:text-green-500"
							}
						>
							<span>
								0{i + 1} |{" "}
								{link.charAt(0).toUpperCase() + link.slice(1)}
							</span>
						</NavLink>
					)
				})}
				<span className="hover:text-green-500">
					07 |{" "}
					<a
						href="https://drive.google.com/file/d/13dnCarlukKw7v6bz9H4UVirrxIk2xYAF/view?usp=sharing"
						target="new"
					>
						Resume
					</a>
				</span>
				<span className="hover:text-green-500">
					08 |{" "}
					<a href="https://bimarshak.com.np" target="new">
						Blog
					</a>
				</span>
			</div>
		</div>
	)
}

export default Nav
