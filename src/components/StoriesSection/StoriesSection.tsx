import React from "react";
import classNames from "classnames";
import classes from "./StoriesSection.module.scss";
import StoryCard from "../StoryCard/StoryCard";

const StoriesSection = () => {
	return (
		<div className={classNames(classes.stories_main)}>
			<div
				className={classNames(
					classes.stories_main_content,
					"grid grid-cols-3 flex justify-items-center gap-4"
				)}
			>
				<StoryCard />
				<StoryCard />

				<StoryCard />
				<StoryCard />
				<StoryCard />
				<StoryCard />
			</div>
		</div>
	);
};

export default StoriesSection;
