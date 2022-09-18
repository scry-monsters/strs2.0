import React from "react";
import classNames from "classnames";
import classes from "./StoriesSection.module.scss";
import StoryCard from "../StoryCard/StoryCard";
import { Story } from "../../models";
import { data } from "../../data.js";

const StoriesSection: React.FC = () => {
	return (
		<div
			id="storiesSection"
			className={classNames(classes.stories_main, "container-fluid")}
		>
			<div className="row d-flex flex-column flex-md-row">
				{data.map((item: Story) => (
					<div className="col-md-6 col-lg-4 d-flex justify-content-center mt-5">
						<StoryCard data={item} key={item.id} />
					</div>
				))}
			</div>
		</div>
	);
};

export default StoriesSection;
