import React from "react";
import classNames from "classnames";
import classes from "./StoriesSection.module.scss";
import StoryCard from "../StoryCard/StoryCard";

let data = [
	{ id: 1, title: "3 in 1" },
	{ id: 2, title: "The Crisis I could not have avoided" },
	{ id: 3, title: "Neighbors" },
	{ id: 4, title: "Sirki" },
	{ id: 5, title: "Ticket home" },
	{ id: 6, title: "404" },
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
						<StoryCard data={item.title} />
					</div>
				))}
			</div>
		</div>
	);
};

export default StoriesSection;
