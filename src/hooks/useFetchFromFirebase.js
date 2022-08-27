import { useState, useReducer } from "react";
import { collection, getDocs, query, startAfter } from "firebase/firestore";
import { database } from "../firebase/FirebaseConfig";

// Initial data object for reducer
const initialDataState = {
	loading: true,
	error: "",
	data: [],
	lastData: 0,
};

// Reducer dispatch function
const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_SUCCESS":
			return {
				loading: false,
				data: action.data,
				error: "",
				lastData: action.lastData,
			};
		case "FETCH_ERROR":
			return {
				loading: false,
				data: action.data,
				lastData: action.lastData,
				error: "Something went Wrong!",
			};
		default:
			return state;
	}
};

const useFetchFromFirebase = (refUrl) => {
	const [state, dispatch] = useReducer(reducer, initialDataState);
	const [hasMoreData, setHasMoreData] = useState(false);
	const [nextDataLoading, setNextDataLoading] = useState(false);

	const [finalError, setFinalError] = useState("");

	const databaseReference = collection(database, refUrl);

	// Function for initial data load
	const getData = (queries) => {
		const initialQuery = query(databaseReference, ...queries);
		getDocs(initialQuery)
			.then((response) => {
				let items = [];
				const lastDoc = response.docs[response.docs.length - 1];

				response.docs.map((item) => {
					items.push(item.data());
				});
				dispatch({
					type: "FETCH_SUCCESS",
					data: items,
					lastData: lastDoc,
				});
				if (items <= 0) {
					dispatch({ type: "FETCH_ERROR" });
				}
			})
			.catch((err) => {
				console.log("Getting error form getData function" + err);
				dispatch({ type: "FETCH_ERROR" });
			});
	};

	// Function for getting next data
	const getNextData = (queries) => {
		const nextDataQuery = query(
			databaseReference,
			startAfter(state.lastData),
			...queries
		);
		getDocs(nextDataQuery)
			.then((response) => {
				let isDocs = response.size === 0;
				if (!isDocs) {
					let items = [];
					const lastDoc = response.docs[response.docs.length - 1];

					response.docs.map((item) => {
						items.push(item.data());
					});
					dispatch({
						type: "FETCH_SUCCESS",
						data: [...state.data, ...items],
						lastData: lastDoc,
					});
					setNextDataLoading(false);
				} else {
					setHasMoreData(true);
					setNextDataLoading(false);
				}
			})
			.catch((err) => {
				console.log("Getting error form getNextData function" + err);
				dispatch({ type: "FETCH_ERROR" });
			});
	};

	return {
		data: state.data,
		loading: state.loading,
		error: state.error,
		getData: getData,
		nextDataLoading: nextDataLoading,
		setNextDataLoading: setNextDataLoading,
		hasMoreData: hasMoreData,
		getNextData: getNextData,
		lastData: state.lastData,
	};
};

export default useFetchFromFirebase;
