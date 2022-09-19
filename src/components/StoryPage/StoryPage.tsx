import classNames from "classnames";
import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data";
import classes from "./StoryPage.module.scss";
const StoryPage = () => {
	const { id } = useParams();
	const storyId = Number(id);
	let story = data[storyId];
	React.useEffect(() => {
		// 👇️ scroll to top on page load
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, []);
	return (
		<div
			className={classNames(
				"container-fluid text-center",
				classes.story_page_main
			)}
		>
			<div className={classNames(classes.main_text_container)}>
				<h1>{story.title}</h1>
				<h5>{story.storyItself}</h5>
			</div>
		</div>
	);
};

export default StoryPage;
