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
					<p>Hey</p>
					<p>
						glad you made it here, <br /> its been a while since we talked. hope
						you&apos;ll enjoy my stories.
					</p>
					<a
						style={{ backgroundColor: "#ffc107" }}
						href="#storiesSection"
						className="inline-flex items-center mt-5 py-2 px-3 text-sm text-center text-white bg-blue-700 rounded-lg "
					>
						<p style={{ fontSize: "20px" }}>stories</p>
						<svg
							aria-hidden="true"
							className="ml-2 -mr-1 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
