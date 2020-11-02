import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { ArticleCards } from "./article-cards.jsx";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			{/*  TODO: Here we should implement the header */}
			<header>h</header>

			{/* This component includes the 4 cards */}
			<ArticleCards />

			{/* TODO: Here we should implement the footer */}
			<footer>f</footer>
		</div>
	);
}
