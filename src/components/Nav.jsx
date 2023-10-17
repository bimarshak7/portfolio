import { NavLink } from "react-router-dom"

const Nav = () => {
	const links = [
		"home",
		"about",
		"skills",
		"contact",
		"experience",
		"showcase",
	]

	return (
		<div className="flex flex-col gap-6 text-left md:pl-4">
			<div>
				<h2 className="text-3xl flex gap-1">
					<span>#</span>Bimarsha Khanal
				</h2>
			</div>
			<div className="flex flex-col gap-2 md:gap-4">
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
				<span>07 | Resume</span>
			</div>
		</div>
	)
}

export default Nav
