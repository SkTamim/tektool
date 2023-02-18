import React, { useEffect } from "react";
import { Container } from "@mui/material";
import AutoCompleteSearchBar from "../../components/searchBar/AutoCompleteSearchBar";
import ResourceSection from "./ResourceSection";

const Resources = () => {

	useEffect(() => {
		document.title = "TekTool - Resources for Developers"
	}, [])

	return (
		<Container maxWidth='xl' sx={{ py: 4 }} component='main'>
			<AutoCompleteSearchBar
				searchList={searchList}
			/>
			<ResourceSection
				fetchUrl='resources/media/images-videos'
				heading='Free stock Images and Videos'
			/>
			<ResourceSection
				fetchUrl='resources/media/vector-graphics'
				heading='Free vector graphics'
			/>
			<ResourceSection
				fetchUrl='resources/media/icons'
				heading='Free Icons'
			/>
		</Container>
	);
};

export default Resources;

const searchList = [
	{ title: "Free Stock Images and Videos", category: 'Media' },
	{ title: "Free vector graphics", category: 'Media' },
	{ title: 'Free Icons', category: 'Media' }
];