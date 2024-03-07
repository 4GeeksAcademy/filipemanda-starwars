import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";



export const Demo = () => {
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/")
			.then((resp) => resp.json())
			.then((data) => (setCharacters(data.results)));
	}, []);


	return (
		<div className="container">
			<ul className="list-group">
				{characters.map((item, index) => {
					return (
						<div key={index} className="card" style={{ width: "18rem" }}>
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
