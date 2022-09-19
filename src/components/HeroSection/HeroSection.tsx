import React from "react";
import classNames from "classnames";
import classes from "./HeroSection.module.scss";
import meAvatar from "./../../images/meram.jpeg";
const HeroSection = () => {
	return (
		<div
			className={classNames(
				"container-fluid row text-center justify-content-center align-items-center d-flex flex-column",
				classes.image__text__container
			)}
		>
			<div className={classNames("col-12", classes.imageContainer)}>
				<img
					className={classes.imageItself}
					src={meAvatar}
					alt="Me in ram world"
				/>
			</div>
			<div
				className={classNames("col-12 text-center", classes.text__container)}
			>
				<h2 className="pt-2">Hey</h2>
				<h5>
					glad you made it here, its been a while since we talked. hope
					you&apos;ll enjoy my stories.
				</h5>
			</div>
		</div>
	);
};

export default HeroSection;
