import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import StoryPage from "./components/StoryPage/StoryPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<StoryPage />} />
				<Route path="/story/:id" element={<StoryPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
