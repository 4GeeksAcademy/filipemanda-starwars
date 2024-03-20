import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Characters } from "./views/characters";
import { Details } from "./views/details";
import { Login } from "./views/login";






export const AppContext = React.createContext();



const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const [favorites, setFavorites] = useState([]);
	const [user, setUser] = useState({})


	useEffect(() => {
		if (user.id) {
			fetch("https://super-duper-adventure-jxwp57wrprvhpp4r-3000.app.github.dev/favorites/" + user.id)
				.then((resp) => resp.json())
				.then((data) => (setUser(data)));
		}
	}, [user])

	return (
		<div>
			<AppContext.Provider value={{ favorites, setFavorites, user, setUser }}>
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/characters/:email" element={<Characters />} />
							<Route path="/single/:theid" element={<Single />} />
							<Route path="/details/:id" element={<Details />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</AppContext.Provider>
		</div>
	);
};

export default injectContext(Layout);
