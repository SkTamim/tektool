import React from "react";
import SearchBar from "../../../components/searchBar/SearchBar";
import HeadingSecondary from "../../../components/UI/typography/HeadingSecondary";
import EntityTypeNavigator from "./EntityTypeNavigator";

const HtmlEntities = () => {
	const getSearchValue = (value) => {
		console.log(value);
	};
	return (
		<>
			<div style={{ textAlign: "center", padding: "1rem 0" }}>
				<HeadingSecondary>HTML Entities</HeadingSecondary>
			</div>
			<SearchBar searchValue={getSearchValue} />
			<EntityTypeNavigator />
		</>
	);
};

export default HtmlEntities;
