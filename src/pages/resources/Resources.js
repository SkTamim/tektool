import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import AutoCompleteSearchBar from "../../components/searchBar/AutoCompleteSearchBar";
import ResourceSection from "./ResourceSection";

import CollectionsIcon from "@mui/icons-material/Collections";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import AppsIcon from "@mui/icons-material/Apps";

const Resources = () => {
	const [isSharched, setIsSharched] = useState(false);

	const getSearchValue = (value) => {
		// getSearchData(value.toLowerCase());
		setIsSharched(true);
	};

	const getSerachLetter = (letter) => {
		if (letter.length === 0) {
			setIsSharched(false);
		}
	};

	useEffect(() => {
		document.title = "TekTool - Resources for Developers"
	}, [])

	return (
		<Container maxWidth='xl' sx={{ py: 4 }} component='main'>
			<AutoCompleteSearchBar searchList={searchList} />
			<ResourceSection
				fetchUrl='resources/media/images-videos'
				heading='Free stock Images and Videos'
				icon={<CollectionsIcon sx={{ color: "#008DA3", mr: 1 }} />}
			/>
			<ResourceSection
				fetchUrl='resources/media/vector-graphics'
				heading='Free vector graphics'
				icon={<WallpaperIcon sx={{ color: "#008DA3", mr: 1 }} />}
			/>
			<ResourceSection
				fetchUrl='resources/media/icons'
				heading='Free Icons'
				icon={<AppsIcon sx={{ color: "#008DA3", mr: 1 }} />}
			/>
		</Container>
	);
};

export default Resources;

const searchList = [
	"Free Stock Images and Videos",
	"Free vector graphics",
	"Free Icons",
];
