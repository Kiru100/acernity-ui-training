import { AuroraBackgroundDemo } from "./components/AuroraBackground";
import { HeroParallaxDemo } from "./components/HeroParalax";
import { ThreeDCardDemo } from "./components/ThreeDCard";

export default function Home() {
	return (
		<div className="">
			<HeroParallaxDemo />
			<ThreeDCardDemo/>
			<AuroraBackgroundDemo/>
		</div>
	);
}
