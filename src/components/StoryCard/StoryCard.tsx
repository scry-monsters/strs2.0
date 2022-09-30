import React from "react";
import classNames from "classnames";
import classes from "./StoryCard.module.scss";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

const StoryCard = ({ data }: any) => {
	let exzerpt = data.storyItself.substring(0, 80) + "...";
	return (
		<div className={classNames(classes.story_card_main)}>
			<div
				className={classNames(classes.story_card_image_container, " d-flex")}
			>
				<img className="" src={data.art} alt="poke" />
			</div>
			<div className={classNames(classes.story_card_text_container, "")}>
				<Heading as="h6" size="md" className={classes.text_container_title}>
					{data.title}
				</Heading>
				<Heading as="h5" size="sm" fontWeight="thin" className="py-1">
					{exzerpt}
				</Heading>

				<Link to={`/story/${data.id}`}>
					<button>
						<Heading
							style={{ marginLeft: "8px" }}
							as="h6"
							size="sm"
							fontWeight="thin"
						>
							read {data.title.substring(0, 5)}...
						</Heading>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default StoryCard;
