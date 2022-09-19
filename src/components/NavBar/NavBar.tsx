import React from "react";
import myLogo from "../../images/myLogo.png";
import classes from "./NavBar.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Burger from "../Burger/Burger";

const NavBar = () => {
	return (
		<div className={classNames(classes.navbar__container, "d-flex flex-row")}>
			<div className="row" style={{ width: "100%" }}>
				<div
					className="col-3 align-items-center justify-content-center pt-4"
					style={{ cursor: "pointer" }}
				>
					<Burger />
				</div>
				<div
					className={classNames(
						classes.logo__image,
						"col-6 align-items-center justify-content-center pt-3"
					)}
				>
					<Link to="/">
						<img
							src={myLogo}
							alt="Logo of my site"
							className={classes.logo__image}
						/>
					</Link>
				</div>
				<div className="col-3"></div>
			</div>
		</div>
	);
};
export default NavBar;
