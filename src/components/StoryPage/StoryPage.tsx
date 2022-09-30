import { Heading, useColorModeValue } from "@chakra-ui/react";
import classNames from "classnames";
import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data";
import classes from "./StoryPage.module.scss";

const StoryPage = () => {
	const { id } = useParams();
	const storyId = Number(id);
	let story = data[storyId];
	let textToBeSplit = story.storyItself;
	let storyArr = textToBeSplit.split("SKRR");
	// const { toggleColorMode } = useColorMode(); toggles the color mode, also can be added to any element with onClick method
	const colorModeValue = useColorModeValue("black", "#d3d3d3");
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
				<Heading
					// onClick={toggleColorMode}
					as="h2"
					size="lg"
					className="pt-2 my-2"
					color={colorModeValue}
				>
					{story.title}
				</Heading>
				{storyArr.map((chunk) => (
					<Heading
						className={classes.main_text_chunk}
						as="h4"
						size="md"
						color={colorModeValue}
					>
						{chunk}
					</Heading>
				))}
			</div>
		</div>
	);
};

export default StoryPage;
