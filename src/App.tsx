import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import StoryPage from "./components/StoryPage/StoryPage";
import Layout from "./components/Layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import myTheme from "./theme";

function App() {
	return (
		<>
			<Layout>
				<ChakraProvider theme={myTheme}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<StoryPage />} />
						<Route path="/story/:id" element={<StoryPage />} />
					</Routes>
				</ChakraProvider>
			</Layout>
		</>
	);
}

export default App;
