import React, { useEffect, useState } from "react";
import Loading from "../../../components/loading/Loading";
import SearchBox from "../../../components/searchBox/SearchBox";
import HtmlEntity from "./HtmlEntity";
import HtmlEntityHeading from "./HtmlEntityHeading";

function HtmlEntities() {
	document.title = "Web Tools - Entities";

	const [entityData, setEntityData] = useState(null);

	const fetchEntityData = async () => {
		try {
			await fetch("entity.json")
				.then((response) => response.json())
				.then((data) => {
					setEntityData(data);
				});
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchEntityData();
	}, []);

	let entities;

	if (entityData) {
		for (const key in entityData) {
			if (Object.hasOwnProperty.call(entityData, key)) {
				const element = entityData[key];
				entities = element;
			}
		}
	}

	//Search
	const onSearch = (quary) => {
		console.log(quary);
	};

	// Search Filter
	// const filterHnadler = (filterData) => {
	// 	console.log(filterData.toLowerCase());
	// 	let filteredData = filterData.toLowerCase();
	// 	let data = entityData.filteredData;
	// 	console.log(data);
	// 	console.log(entityData);
	// };

	// if (filteredData) {
	// 	if (filteredData != "all") {
	// 		console.log(entityData);

	// 		entities = entityData.filteredData;
	// 		console.log(entities);
	// 	}
	// }

	return (
		<main className='section-html-entities margin-y-big margin-top-for-nav'>
			<div className='text-center'>
				<h1 className='heading-primary'>HTML Entities</h1>
			</div>

			<SearchBox
				options={[
					"symbols",
					"Arrows",
					"currency",
					"letters",
					"math",
					"numbers",
					"punctuation",
				]}
				search={onSearch}
			/>

			<HtmlEntityHeading />
			{entityData ? (
				entities.map((element, index) => (
					<HtmlEntity
						character={element.character}
						name={element.name}
						entity={element.entity}
						unicode={element.unicode}
						css={element.css}
						key={element.unicode + index}
					/>
				))
			) : (
				<Loading className='entities-loading' />
			)}
		</main>
	);
}

export default HtmlEntities;
