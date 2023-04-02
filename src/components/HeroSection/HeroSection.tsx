import React from "react";
import classNames from "classnames";
import classes from "./HeroSection.module.scss";
import meAvatar from "./../../images/meram.jpeg";
import { Heading } from "@chakra-ui/react";
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
				<Heading as="h2" size="md" className="pt-3 pb-2" fontWeight="semibold">
					Hey
				</Heading>
				<Heading as="h4" size="md" fontWeight="thin">
					glad you made it here, its been a while since we talked. hope
					you&apos;ll enjoy my stories.
					!!The site is under construction till I finish my Diploma!!
				</Heading>
			</div>
		</div>
	);
};

export default HeroSection;
