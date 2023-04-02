import { Button, Heading } from "@chakra-ui/react";
import React, { useEffect, useState, useMemo } from "react";
import HeroSection from "../HeroSection/HeroSection";
import classNames from "classnames";
import classes from "./AboutPage.module.scss";
import axios from "axios";

interface Text {
	id: number;
	textValue: string;
	image: string;
}

const AboutPage = () => {
	const texts: Text[] = useMemo(
		() => [
			{
				id: 1,
				textValue: "one",
				image:
					"https://wallpaperfordesktop.com/wp-content/uploads/2022/06/Studio-Ghibli-Wallpaper.jpg",
			},
			{
				id: 2,
				textValue: "two",
				image: "https://wallpaperaccess.com/full/3032591.jpg",
			},
			{
				id: 3,
				textValue: "three",
				image: "https://wallpaperaccess.com/full/42618.jpg",
			},
		],
		[]
	);

	let fetchedData = async () => {
		const { data } = await axios.get(
			"https://jsonplaceholder.typicode.com/todos?_limit=10"
		);
		console.log(data);
	};

	const [text, setText] = useState(texts[0].image);
	useEffect(() => {
		setText(texts[0].image);
		fetchedData();
	}, [texts]);
	const textHandler = (item: string) => {
		setText(item);
	};
	return (
		<>
			<HeroSection />
			<div className={classNames(classes.main_container)}>
				<div
					className={classNames(
						classes.main_text_container,
						"text-center pt-4"
					)}
				>
					<Heading as="h2" size="2xl" className="pb-3">
						Get to know me
					</Heading>
					<Heading as="h4" size="sm" fontWeight="normal">
						Hi! Thank you for visiting my page, initially I wanted this place to
						be where I write my short stories.
						<br />
						But with time I decided to broaden the page to be something a bit
						more. Below you can find more information about me.
					</Heading>
				</div>
				<div className={classNames(classes.main_showcase, "container")}>
					<div
						className={classNames(
							classes.text_image_container,
							"row d-flex flex-column flex-md-row align-items-center justify-content-center"
						)}
					>
						<div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
							{texts.map((item) => (
								<Button
									className={classes.sturdy_button}
									key={item.id}
									onClick={() => textHandler(item.image)}
									width="100%"
								>
									{item.textValue}
								</Button>
							))}
						</div>
						<div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
							<img src={`${text}`} alt="yes" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutPage;
