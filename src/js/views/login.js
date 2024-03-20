import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/demo.css";
import { Characters } from "./characters";
import { Details } from "./details";
import { AppContext } from "../layout";

export const Login = () => {
    const [email, setEmail] = useState({})
    const { favorites, setFavorites, user, setUser } = useContext(AppContext);




    // useEffect(() => {
    //     fetch(`https://super-duper-adventure-jxwp57wrprvhpp4r-3000.app.github.dev/user/${email}`)
    //         .then((resp) => resp.json())
    //         .then((data) => (setUser(data)));
    // }, []);


    const login_email = () => {
        fetch(`https://super-duper-adventure-jxwp57wrprvhpp4r-3000.app.github.dev/user/${email}`)
            .then((resp) => resp.json())
            .then((data) => (setUser(data)));
    }

    return (


        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email"
                        onChange={(event) => setEmail(event.target.value)}
                        className="form-control" id="inputEmail" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label className="form-check-label"><input type="checkbox" /> Remember me</label>
                </div>
                <Link to={"/characters/" + (email)} >
                    <button
                        onClick={(event) => login_email()}
                        className="btn btn-primary" type="submit">Submit form



                    </button></Link>
            </form>
        </div>


    )
}