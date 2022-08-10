import React from "react";
import classNames from "classnames";
import classes from "./StoriesSection.module.scss";
import StoryCard from "../StoryCard/StoryCard";

const StoriesSection = () => {
	return (
		<div id="storiesSection" className={classNames(classes.stories_main)}>
			<div
				className={classNames(
					classes.stories_main_content,
					"grid grid-cols-3 gap-5 py-3 px-4"
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
