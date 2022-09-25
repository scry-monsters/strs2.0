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
				<Heading as="h5" size="sm" className={classes.text_container_title}>
					{data.title}
				</Heading>
				<Heading as="h5" size="sm" className="">
					{exzerpt}
				</Heading>

				<Link to={`/story/${data.id}`}>
					<button>
						<p>read {data.title.substring(0, 5)}...</p>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default StoryCard;
