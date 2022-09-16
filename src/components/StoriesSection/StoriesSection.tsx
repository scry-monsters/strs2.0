import React from "react";
import classNames from "classnames";
import classes from "./StoriesSection.module.scss";
import StoryCard from "../StoryCard/StoryCard";

let data = [
	{
		id: 1,
		title: "3 in 1",
		exzerpt: "Three weeks of quarantine.",
	},
	{
		id: 2,
		title: "existential crisis",
		exzerpt: "Just my day to day routine.",
	},
	{ id: 3, title: "Neighbors", exzerpt: "Who are they?" },
	{
		id: 4,
		title: "B U Aleksandrov",
		exzerpt: "'pimples in a package'.",
	},
	{ id: 5, title: "Ticket home", exzerpt: "There is a lesson to be learned." },
	{ id: 6, title: "404", exzerpt: "I'm still writing this one!" },
];

const StoriesSection = () => {
	return (
		<div
			id="storiesSection"
			className={classNames(classes.stories_main, "container-fluid")}
		>
			<div className="row d-flex flex-column flex-md-row">
				{data.map((item) => (
					<div
						className="col-md-6 col-lg-4 d-flex justify-content-center mt-5"
						key={item.id}
					>
						<StoryCard data={item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default StoriesSection;
