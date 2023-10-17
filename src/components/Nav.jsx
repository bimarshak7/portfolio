import { NavLink } from "react-router-dom"

const Nav = () => {
	const links = [
		"home",
		"about",
		"skills",
		"contact",
		"experience",
		"achievements",
		"showcase",
	]

	return (
		<div className="flex flex-col gap-6 text-left md:pl-4">
			<div>
				<h2 className="text-xl md:text-3xl flex gap-1 md:font-bold">
					<span>#</span>Bimarsha Khanal
				</h2>
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
				<span>
					08 |{" "}
					<a
						href="https://drive.google.com/file/d/13dnCarlukKw7v6bz9H4UVirrxIk2xYAF/view?usp=sharing"
						target="new"
					>
						Resume
					</a>
				</span>
			</div>
		</div>
	)
}

export default Nav
