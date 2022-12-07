import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function Navbar() {
	return (
		<div className="navbar">
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
