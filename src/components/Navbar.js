import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {

	const { color } = useTheme()

	return (
		<div
			className="navbar"
			style={{ backgroundColor: color}}
		>
			<nav>
				<NavLink className="brand" to="/">
					<h1>Cooking Ninja</h1>
				</NavLink>
				<Searchbar />
				<NavLink to="/create">Create Recipe</NavLink>
			</nav>
		</div>
	);
}
