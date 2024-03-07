import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";



export const Details = () => {
	const [character, setCharacter] = useState({})

	var param = useParams()

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + param.id)
			.then((resp) => resp.json())
			.then((data) => (setCharacter(data.result.properties)));
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
							<p>height:{character.height}</p>
							<p>mass:{character.mass}</p>
							<p>hair color:{character.hair_color}</p>
							<p>eye color:{character.eye_color}</p>
							<p>birth year:{character.birth_year}</p>
							<p>gender:{character.gender}</p>
							<p>homeworld:{character.homeworld}</p>


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


