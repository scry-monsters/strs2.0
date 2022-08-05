import React from "react";
import classNames from "classnames";
import classes from "./HeroSection.module.scss";
import meAvatar from "./../../images/meram.jpeg";
const HeroSection = () => {
	return (
		<div className={classNames(classes.hero_main)}>
			<div
				className={classNames(
					classes.hero_main_content,
					"grid grid-cols-1 flex justify-items-center"
				)}
			>
				<div>
					<img src={meAvatar} alt="Me in ram" />
				</div>
				<div className={classNames(classes.hero_main_content_text)}>
					<h5>
						glad you made it here, its been a while since we talked. hope
						you&apos;ll enjoy my stories.
					</h5>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
