import { Container } from "@mui/material";
import React, { useEffect } from "react";
import Feature from "../../components/features/Feature";
import Hero from "./Hero";

import featureImg1 from "../../assets/images/Static assets-bro.svg";
import featureImg2 from "../../assets/images/bro.svg";
import featureImg3 from "../../assets/images/cuate.svg";
import featureImg4 from "../../assets/images/amico.svg";

const features = [
	{
		heading: "Resources Page",
		description:
			"On this page, you'll find a collection of free tools and resources to simplify your development journey.",
		img: featureImg1,
		order: "left",
		to: "/resources",
		number: "01",
	},
	{
		heading: "Shadows Page",
		description:
			"In this section, you will find awesome Box shadows and Text shadows to use in you next project.",
		img: featureImg2,
		order: "right",
		to: "/box-shadows/light",
		color: "blue",
		number: "02",
	},
	{
		heading: "Entities Page",
		description:
			"In this section, you will find HTML entity code, Unicode and CSS code for all spacial characters and Emojies available in the web.",
		img: featureImg3,
		order: "left",
		to: "/html-entities/symbols",
		number: "03",
	},
	{
		heading: "learn Page",
		description:
			"In this page, you will find great Free learning resources to learn anything you want.",
		img: featureImg4,
		order: "right",
		to: "/learn",
		color: "blue",
		number: "04",
	},
];

const Home = () => {
	useEffect(() => {
		document.title = "TekTool for Developers"
	}, [])

	return (
		<>
			<Hero />
			<Container maxWidth='xl'>
				{features.map((feature) => (
					<Feature feature={feature} key={feature.number} />
				))}
			</Container>
		</>
	);
};

export default Home;
