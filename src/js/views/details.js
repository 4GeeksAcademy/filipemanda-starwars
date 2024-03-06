import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";



export const Details = () => {
	const [character, setCharacter] = useState({})

	var param = useParams()

	useEffect(() => {
		fetch("https://swapi.dev/api/people/" + param.id)
			.then((resp) => resp.json())
			.then((data) => (setCharacter(data)));
	}, []);

	return (
		<div className="container">
			<ul className="list-group">

				<div className="row g-0">
					<div className="col-md-4">
						<img src="https://lumiere-a.akamaihd.net/v1/images/607598d0230e6a00018e21b2-image_354b1b56.jpeg?region=0,0,1536,864" className="card-img-top" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{character.name}</h5>
							<p>skin color:{character.skin_color}</p>
							<p>eye color:{character.eye_color}</p>
							<p>birth year:{character.birth_year}</p>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

						</div>
					</div>
				</div>


			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};


