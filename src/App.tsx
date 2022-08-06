import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import StoriesSection from "./components/StoriesSection/StoriesSection";

function App() {
	return (
		<div className="flex-column mx-auto">
			<NavBar />
			<HeroSection />
			<StoriesSection />
		</div>
	);
}

export default App;
