import React, { useEffect, useState, useMemo } from "react";
import HeroSection from "../HeroSection/HeroSection";
import classNames from "classnames";
import classes from "./SocialsPage.module.scss";

const SocialsPage = () => {
	return (
		<>
			<div
				className={classNames(
					classes.main_container,
					"container d-flex justify-content-center align-items-center"
				)}
			>
				<p style={{ fontSize: "150px" }}>404</p>
			</div>
		</>
	);
};

export default SocialsPage;
