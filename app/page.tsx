"use client";

import { useEffect } from "react";
import { AuroraBackgroundDemo } from "./components/AuroraBackground";
import { HeroParallaxDemo } from "./components/HeroParalax";
import { ThreeDCardDemo } from "./components/ThreeDCard";
import { AppleCardsCarouselDemo } from "./components/AppleCardCarousel";
import { MacbookScrollDemo } from "./components/MacbookScrollDemo";



export default function Home() {
	useEffect(() => {
		// Add the 'dark' class to the <html> tag by default
		document.documentElement.classList.add('dark');
	  }, []);

	return (
		<div className="">
			<HeroParallaxDemo />
			<ThreeDCardDemo/>
			<AuroraBackgroundDemo/>
			<AppleCardsCarouselDemo/>
			<MacbookScrollDemo/>
		</div>
	);
}
