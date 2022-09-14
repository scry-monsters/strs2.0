import React from "react";
import classNames from "classnames";
import classes from "./StoryCard.module.scss";

const StoryCard = ({ data }: any) => {
	return (
		<div
			className={classNames(
				classes.story_card_main,
				"items-center justify-center align-center text-center"
			)}
		>
			<div
				className={classNames(
					classes.story_card_image_container,
					"p-6 max-w-base bg-white rounded-lg border border-gray-200 shadow-md  dark:border-gray-700"
				)}
			>
				<img
					className=""
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png"
					alt="poke"
				/>
				<div
					className={classNames(
						classes.story_card_text_container,
						"items-center justify-center align-center text-center"
					)}
				>
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black mt-3">
						{data}
					</h5>
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
						corporis.
					</p>
					<a
						style={{ backgroundColor: "#ffc107" }}
						href="www.something.com"
						className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-black bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						<p>Read more</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default StoryCard;
