import React, { useState, useEffect, useReducer } from "react";
import { database } from "../../../firebase/FirebaseConfig";
import {
	collection,
	getDocs,
	query,
	orderBy,
	limit,
	startAfter,
} from "firebase/firestore";

import { makeStyles } from "@mui/styles";
import { Button, Grid } from "@mui/material";
import ShadowBox from "./ShadowBox";
import Paragraph from "../../../components/UI/typography/Paragraph";
import LoadingScreen from "../LoadingScreen";

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: "2rem",
	},
	subHeading: {
		fontSize: "1.5rem",
		fontWeight: "500",
		textTransform: "uppercase",
		textDecoration: "underline",
		color: theme.palette.accent.black,
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.2rem",
		},
	},
	errorMessage: {
		color: theme.palette.spacial.error,
	},
}));

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
				data: action.data,
				error: "",
			};
		case "FETCH_ERROR":
			return {
				loading: false,
				data: action.data,
				error: "Something went Wrong!",
			};
		default:
			return state;
	}
};

const LightBoxShadows = (props) => {
	const classes = useStyles();
	const [state, dispatch] = useReducer(reducer, initialDataState);
	const [lastData, setLastData] = useState(0);
	const [isEmpty, setIsEmpty] = useState(false);
	const [loading, setLoading] = useState(false);

	const ref = collection(database, "shadows/box-shadows/light");
	const q = query(ref, limit(5));
	const getData = () => {
		getDocs(q)
			.then((response) => {
				let items = [];
				response.docs.map((item) => {
					items.push(item.data());
				});
				dispatch({
					type: "FETCH_SUCCESS",
					data: items,
				});

				const lastDoc = response.docs[response.docs.length - 1];
				setLastData(lastDoc);
			})
			.catch((err) => {
				console.log(err);
				dispatch({ type: "FETCH_ERROR" });
			});
	};

	useEffect(() => {
		getData();
	}, []);

	console.log(lastData);
	console.log(state.data);

	const getNextData = () => {
		const newQ = query(ref, startAfter(lastData), limit(25));
		getDocs(newQ)
			.then((response) => {
				let isDocs = response.size === 0;
				if (!isDocs) {
					let items = [];
					response.docs.map((item) => {
						items.push(item.data());
					});
					dispatch({
						type: "FETCH_SUCCESS",
						data: [...state.data, ...items],
					});

					const lastDoc = response.docs[response.docs.length - 1];
					setLastData(lastDoc);
					setLoading(false);
				} else {
					setIsEmpty(true);
					setLoading(false);
				}
			})
			.catch((err) => {
				console.log(err);
				dispatch({ type: "FETCH_ERROR" });
			});
	};

	const loadMoreData = () => {
		getNextData();
		setLoading(true);
		console.log("loding more...");
	};

	return (
		<div className={classes.root} id={props.shadowId}>
			<h4 className={classes.subHeading}>{props.shadowType} Shadows</h4>

			<Grid container gap={8} justifyContent='center' py={4}>
				{state.loading && <LoadingScreen />}
				{state.data &&
					state.data.map((data) => (
						<Grid item key={data.id}>
							<ShadowBox styles={data.shadow} by={data.by} link={data.link} />
						</Grid>
					))}
				{state.error && (
					<Paragraph className={classes.errorMessage}>{state.error}</Paragraph>
				)}
			</Grid>
			<div style={{ textAlign: "center" }}>
				{!loading && !isEmpty && (
					<Button onClick={loadMoreData}>Load more</Button>
				)}
				{loading && <p>Loading more data...</p>}
				{isEmpty && <p>No more data...</p>}
			</div>
		</div>
	);
};

export default LightBoxShadows;
