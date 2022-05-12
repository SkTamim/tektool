import React, { useEffect, useReducer } from "react";
import SearchBar from "../../../components/searchBar/SearchBar";
import HeadingSecondary from "../../../components/UI/typography/HeadingSecondary";
import EntityTypeNavigator from "./EntityTypeNavigator";
import HtmlEntityComponent from "./HtmlEntityComponent";

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
	const getSearchValue = (value) => {
		console.log(value);
	};

	const [state, dispatch] = useReducer(reducer, initialDataState);

	useEffect(() => {
		fetch("entity.json")
			.then((responce) => responce.json())
			.then((result) => {
				dispatch({
					type: "FETCH_SUCCESS",
					payload: result,
				});
			})
			.catch(() => dispatch({ type: "FETCH_ERROR" }));
	}, []);

	return (
		<>
			<div style={{ textAlign: "center", padding: "1rem 0" }}>
				<HeadingSecondary>HTML Entities</HeadingSecondary>
			</div>
			<EntityTypeNavigator />
			<SearchBar searchValue={getSearchValue} />

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
