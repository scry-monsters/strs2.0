import classNames from "classnames";
import React from "react";
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { data } from "../../data";
import classes from "./StoryPage.module.scss";
import { MoonIcon } from "@chakra-ui/icons";
const StoryPage = () => {
	const { id } = useParams();
	const storyId = Number(id);
	let story = data[storyId];
	let textToBeSplit = story.storyItself;
	let storyArr = textToBeSplit.split("SKRR");
	React.useEffect(() => {
		// 👇️ scroll to top on page load
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, []);
	const { toggleColorMode } = useColorMode();
	return (
		<div
			className={classNames(
				"container-fluid text-center",
				classes.story_page_main
			)}
		>
			<div className={classNames(classes.main_text_container)}>
				<div className="pb-3">
					<MoonIcon onClick={toggleColorMode} />
				</div>
				<h1>{story.title}</h1>
				{storyArr.map((chunk) => (
					<h5>{chunk}</h5>
				))}
			</div>
		</div>
	);
};

export default StoryPage;
