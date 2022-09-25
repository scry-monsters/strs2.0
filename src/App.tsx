import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import StoryPage from "./components/StoryPage/StoryPage";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import NavBar from "./components/NavBar/NavBar";

function App() {
	return (
		<>
			<ChakraProvider theme={theme}>
				<NavBar />

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<StoryPage />} />
					<Route path="/story/:id" element={<StoryPage />} />
				</Routes>
			</ChakraProvider>
		</>
	);
}

export default App;
