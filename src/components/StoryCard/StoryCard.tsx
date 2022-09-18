import React from "react";
import classNames from "classnames";
import classes from "./StoryCard.module.scss";
import Button from "../buttons/Button";
import { Link } from "react-router-dom";

const StoryCard = ({ data }: any) => {
	return (
		<div
			className={classNames(
				classes.story_card_main,
				"items-center justify-center align-center text-center"
			)}
		>
			<div className={classNames(classes.story_card_image_container, "")}>
				<img
					className=""
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png"
					alt="poke"
				/>
			</div>
			<div className={classNames(classes.story_card_text_container, "")}>
				<div>
					<p className={classes.text_container_title}>{data.title}</p>
				</div>
				<br />
				<p className="">{data.exzerpt}</p>
				<div className="mt-3">
					<Link to={`/story/${data.id}`}>
						<Button
							clickity={() => console.log("yas queen")}
							color={"#ffc107"}
							height={50}
							width={100}
							text={"read"}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default StoryCard;
