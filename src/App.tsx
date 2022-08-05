import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";

function App() {
	return (
		<div className="flex-column mx-auto">
			<NavBar />
			<HeroSection />
		</div>
	);
}

export default App;
