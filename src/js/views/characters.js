import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { AppContext } from "../layout";
import "../../styles/demo.css";



export const Characters = () => {
    const [characters, setCharacters] = useState([])
    const { favorites, setFavorites } = useContext(AppContext);
    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/")
            .then((resp) => resp.json())
            .then((data) => (setCharacters(data.results)));
    }, []);



    return (
        <div className=" container">

            <ul className="list-group">
                <div className="d-flex ">{characters.map((character, index) => {
                    return (
                        <div className="row d-flex justify-content-center">
                            <div key={index} style={{ margin: `50px` }}>
                                <div className="card col-2" style={{ width: "18rem" }}>
                                    <img src={"https://lumiere-a.akamaihd.net/v1/images/607598d0230e6a00018e21b2-image_354b1b56.jpeg?region=0,0,1536,864"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{character.name}</h5>
                                        <p className="card-text">click the button to learn more about {character.name}</p>
                                        <Link to={"/details/" + (index + 1)} ><button href="#" className="btn btn-primary" >see details</button></Link>
                                        <button className="btn btn-outline-warning"
                                            onClick={() => setFavorites([...favorites, character])}>
                                            {character ? <i className="far fa-heart" /> : <i className="far fa-heart" />}
                                        </button>


                                    </div>
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
