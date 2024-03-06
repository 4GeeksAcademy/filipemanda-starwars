import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "./characters";


// 1. fetch charcters from api
// 2. create a state hook to hold charcter in array  
// 3. create an indivusial card component to diplay charcter 
// 4. map through all charcters and call the card component for each one 
// 5. create a view component ('detals') to display all details of a charcter 
// 6. on every card componenet create a button which will <link> to details page for that charcter 
export const Home = () => (
	<div className="text-center mt-5">
		<Characters />
	</div>
);
