import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Login from "./pages/login";
import AllCateg from "./pages/allCateg";
import Register from "./pages/register";
import ForgotPass from "./pages/forgotPass";
import Profile from "./pages/profile";
import SelectCateg from "./pages/selectCateg";
import { Home } from "./pages/home";
import { HomeCatDest } from "./pages/homeCatDest";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/forgotPass" component={ForgotPass} />
						<Route exact path="/selectCateg" component={SelectCateg} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/allCateg" component={AllCateg} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/homeCatDest" component={HomeCatDest} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
