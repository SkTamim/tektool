import { Box, Container } from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import SearchBar from "../../../components/searchBar/SearchBar";
import HeadingSecondary from "../../../components/UI/typography/HeadingSecondary";
import EntityTypeNavigator from "./EntityTypeNavigator";
import HtmlEntityComponent from "./HtmlEntityComponent";

import { database } from "../../../firebase/FirebaseConfig";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

const initialDataState = {
	loading: true,
	error: "",
	data: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_SUCCESS":
			return {
				loading: false,
				data: action.payload,
				error: "",
			};
		case "FETCH_ERROR":
			return {
				loading: false,
				data: action.payload,
				error: "Something went Wrong!",
			};
		default:
			return state;
	}
};

const HtmlEntities = () => {
	const [state, dispatch] = useReducer(reducer, initialDataState);

	// useEffect(() => {
	// 	fetch("entity.json")
	// 		.then((responce) => responce.json())
	// 		.then((result) => {
	// 			dispatch({
	// 				type: "FETCH_SUCCESS",
	// 				payload: result,
	// 			});
	// 		})
	// 		.catch(() => dispatch({ type: "FETCH_ERROR" }));
	// }, []);

	const addData = async (
		id,
		character,
		css,
		dec,
		entity,
		hex,
		name,
		unicode
	) => {
		await setDoc(doc(database, "entities/html-entities/arrows", id), {
			id: id,
			character: character,
			css: css,
			dec: dec,
			entity: entity,
			hex: hex,
			name: name,
			unicode: unicode,
		});
	};
	// addData("entity data", "0");
	// addData(
	// 	"index",
	// 	"data.character",
	// 	"data.css",
	// 	"data.dec",
	// 	"data.entity",
	// 	"data.hex",
	// 	"data.name",
	// 	"data.unicode"
	// );
	const [apiData, setApiData] = useState([]);

	// useEffect(() => {
	// 	fetch("https://tektool-e6931-default-rtdb.firebaseio.com/entity-codes.json")
	// 		.then((responce) => responce.json())
	// 		.then((result) => {
	// 			const myData = result.arrows;
	// 			setApiData(myData);
	// 		})
	// 		.catch((err) => console.log(err));
	// }, []);

	// useEffect(() => {
	// 	if (apiData.length != 0) {
	// 		// apiData.forEach((element, index) => {
	// 		// 	addData(
	// 		// 		index,
	// 		// 		element.character,
	// 		// 		element.css,
	// 		// 		element.dec,
	// 		// 		element.entity,
	// 		// 		element.hex,
	// 		// 		element.name,
	// 		// 		element.unicode
	// 		// 	);
	// 		// });
	// 	}
	// }, [apiData]);

	return (
		<>
			<EntityTypeNavigator />

			<HtmlEntityComponent
				data={state.data}
				error={state.error}
				loading={state.loading}
				entityType='Arrows'
				id='arrows'
			/>
			<HtmlEntityComponent
				data={state.data}
				error={state.error}
				loading={state.loading}
				entityType='symbols'
				id='symbols'
			/>
			<HtmlEntityComponent
				data={state.data}
				error={state.error}
				loading={state.loading}
				entityType='currency'
				id='currency'
			/>
			<HtmlEntityComponent
				data={state.data}
				error={state.error}
				loading={state.loading}
				entityType='punctuation'
				id='punctuation'
			/>
			<HtmlEntityComponent
				data={state.data}
				error={state.error}
				loading={state.loading}
				entityType='math'
				id='math'
			/>
			<HtmlEntityComponent
				data={state.data}
				error={state.error}
				loading={state.loading}
				entityType='numbers'
				id='numbers'
			/>
			<HtmlEntityComponent
				data={state.data}
				error={state.error}
				loading={state.loading}
				entityType='letters'
				id='letters'
			/>
		</>
	);
};

export default HtmlEntities;
