import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";



export const Characters = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch("https://swapi.dev/api/people/")
            .then((resp) => resp.json())
            .then((data) => (setCharacters(data.results)));
    }, []);

    return (
        <div className=" container">

            <ul className="list-group">
                <div className="d-flex overflow-scroll ">{characters.map((character, index) => {
                    return (
                        <div style={{ margin: `50px`, display: `flex`, flexDirection: `col`, justifyContent: `center` }}>
                            <div key={index} className="card \" style={{ width: "18rem" }}>
                                <img src={"https://lumiere-a.akamaihd.net/v1/images/607598d0230e6a00018e21b2-image_354b1b56.jpeg?region=0,0,1536,864"} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{character.name}</h5>
                                    <p className="card-text">click the button to learn more about {character.name}</p>
                                    <Link to={"/details/" + (index + 1)} ><button href="#" className="btn btn-primary" >see details</button></Link>

                                </div>
                            </div>
                        </div>
                    );

                })} </div>
            </ul>

            <br />

            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
};
