import React from "react";
import classes from "./NavBar.module.scss";
import classNames from "classnames";
import myLogo from "../../images/myLogo.png";
import Burger from "../Burger/Burger";
const NavBar = () => {
	return (
		<nav
			className={classNames(
				classes.main_navbar,
				"relative grid  grid-cols-3 mx-auto"
			)}
		>
			<div className="pl-1 pt-2">
				<Burger />
			</div>
			<div
				className={classNames(
					classes.image_container,
					"flex items-center justify-center mx-auto"
				)}
			>
				<img src={myLogo} alt="My personal logo" />
			</div>
		</nav>
	);
};

export default NavBar;
