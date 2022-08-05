import React from "react";
import classes from "./NavBar.module.scss";
import classNames from "classnames";
import myLogo from "../../images/myLogo.png";
const NavBar = () => {
	return (
		<nav className={classNames(classes.main_navbar, "relative mx-auto")}>
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
