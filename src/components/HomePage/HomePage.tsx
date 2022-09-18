import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Layout from "../Layout/Layout";
import StoriesSection from "../StoriesSection/StoriesSection";

const HomePage = () => {
	return (
		<Layout>
			<HeroSection />
			<StoriesSection />
		</Layout>
	);
};

export default HomePage;
