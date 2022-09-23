import { useState, useReducer, useEffect } from "react";
import { collection, getDocs, query, startAfter } from "firebase/firestore";
import { database } from "../firebase/FirebaseConfig";
import { limit } from "firebase/firestore";

// Initial data object for reducer
const initialDataState = {
	loading: true,
	error: "",
	data: [],
};

// Reducer dispatch function
const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_SUCCESS":
			return {
				loading: false,
				data: action.data,
				error: "",
			};
		case "FETCH_ERROR":
			return {
				loading: false,
				data: action.data,
				error: "No result found!",
			};
		default:
			return state;
	}
};

const useFetchFromFirebase = (refUrl, searchFrom) => {
	const [state, dispatch] = useReducer(reducer, initialDataState);

	const [allItems, setAllItems] = useState([]);

	const databaseReference = collection(database, refUrl);

	// Function for initial data load
	const getData = (searchValue) => {
		if (localStorage.getItem(searchFrom)) {
			let localData = JSON.parse(localStorage.getItem(searchFrom));

			const serchedData = localData.filter((item) => {
				return item.name.includes(searchValue);
			});

			dispatch({
				type: "FETCH_SUCCESS",
				data: serchedData,
			});
			if (serchedData <= 0) {
				dispatch({ type: "FETCH_ERROR" });
			}
		} else {
			const initialQuery = query(databaseReference, limit(700));
			getDocs(initialQuery)
				.then((response) => {
					let items = [];
					response.docs.map((item) => {
						items.push(item.data());
					});

					setAllItems(items);

					const serchedData = items.filter((item) => {
						return item.name.includes(searchValue);
					});

					dispatch({
						type: "FETCH_SUCCESS",
						data: serchedData,
					});
					if (serchedData <= 0) {
						dispatch({ type: "FETCH_ERROR" });
					}
				})
				.catch((err) => {
					console.log("Getting error form getData function" + err);
					dispatch({ type: "FETCH_ERROR" });
				});
		}
	};

	useEffect(() => {
		if (allItems.length != 0) {
			localStorage.setItem(searchFrom, JSON.stringify(allItems));
		}
	}, [allItems]);

	return {
		searchData: state.data,
		searchLoading: state.loading,
		searchError: state.error,
		getSearchData: getData,
	};
};

export default useFetchFromFirebase;
