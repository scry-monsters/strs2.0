import React from "react";
import classNames from "classnames";
import classes from "./StoriesSection.module.scss";
import StoryCard from "../StoryCard/StoryCard";
import { Story } from "../../models";
import { data } from "../../data.js";

const StoriesSection: React.FC = () => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				style={{ marginBottom: "-1px" }}
				viewBox="0 0 1440 320"
			>
				<path
					fill="#005691"
					fillOpacity="1"
					d="M0,256L20,234.7C40,213,80,171,120,149.3C160,128,200,128,240,133.3C280,139,320,149,360,160C400,171,440,181,480,176C520,171,560,149,600,122.7C640,96,680,64,720,48C760,32,800,32,840,64C880,96,920,160,960,165.3C1000,171,1040,117,1080,117.3C1120,117,1160,171,1200,197.3C1240,224,1280,224,1320,202.7C1360,181,1400,139,1420,117.3L1440,96L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
				></path>
			</svg>
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
		</>
	);
};

export default StoriesSection;
