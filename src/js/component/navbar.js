import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../layout";


export const Navbar = () => {
	const { favorites, setFavorites } = useContext(AppContext);
	function deletefav(index) {
		setFavorites(favorites.filter((item, idx) => index !== idx))
	}
	return (
		<nav className="text-center ">
			<div className="dropdown ">
				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu" >

					{favorites.map((character, index) => 
					<li key={index} ><a className="dropdown-item" href="#">{character.name}<i className="far fa-heart">
						<i class="fas fa-trash" onClick={() => setFavorites([favorites, character]) } > </i></i></a></li>)}

				</ul>
			</div>

			<span className="star">Star</span>
			<h1 className="visual">a visual guide</h1>
			<h1 className="wars">wars</h1>


		</nav>

	);
};
