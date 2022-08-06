import React from "react";
import classNames from "classnames";
import classes from "./StoryCard.module.scss";

const StoryCard = () => {
	return (
		<div
			className={classNames(
				classes.story_card_main,
				"items-center justify-center align-center text-center"
			)}
		>
			<div className={classNames(classes.story_card_image_container, "py-4")}>
				<img
					className=""
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png"
					alt="poke"
				/>
			</div>
			<div
				className={classNames(
					classes.story_card_text_container,
					"items-center justify-center align-center text-center"
				)}
			>
				<h1>Title</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur!
				</p>
			</div>
		</div>
	);
};

export default StoryCard;
