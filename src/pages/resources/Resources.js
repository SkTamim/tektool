import React, { useState } from "react";
import { Container } from "@mui/material";
import AutoCompleteSearchBar from "../../components/searchBar/AutoCompleteSearchBar";
import ResourceSection from "./ResourceSection";

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

	return (
		<Container maxWidth='xl' sx={{ py: 4 }} component='main'>
			<AutoCompleteSearchBar searchList={searchList} />
			<ResourceSection />
		</Container>
	);
};

export default Resources;

const searchList = [
	"Free Stock Images and Videos",
	"Free SVG images",
	"Free Icons",
];
