import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import StoryPage from "./components/StoryPage/StoryPage";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import NavBar from "./components/NavBar/NavBar";
import AboutPage from "./components/AboutPage/AboutPage";
import StoriesPage from "./components/StoriesPage/StoriesPage";
import SocialsPage from "./components/SocialsPage/SocialsPage";

function App() {
	return (
		<>
			<ChakraProvider theme={theme}>
				<NavBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/stories" element={<StoriesPage />} />
					<Route path="/story/:id" element={<StoryPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/socials" element={<SocialsPage />} />
				</Routes>
			</ChakraProvider>
		</>
	);
}

export default App;
