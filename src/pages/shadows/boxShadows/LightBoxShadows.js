import React, { useEffect, useReducer } from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import ShadowBox from "./ShadowBox";
import Paragraph from "../../../components/UI/typography/Paragraph";
import LoadingScreen from "./LoadingScreen";

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: "4rem",
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

const LightBoxShadows = () => {
	const classes = useStyles();
	const [state, dispatch] = useReducer(reducer, initialDataState);

	useEffect(() => {
		fetch("light-shadows.json")
			.then((responce) => responce.json())
			.then((result) => {
				dispatch({ type: "FETCH_SUCCESS", payload: result });
			})
			.catch(() => dispatch({ type: "FETCH_ERROR" }));
	}, []);

	return (
		<div className={classes.root}>
			<h4 className={classes.subHeading}>Light Shadows</h4>

			<Grid container gap={8} justifyContent='center' py={4}>
				{state.loading && <LoadingScreen />}
				{state.data &&
					state.data.map((data) => (
						<Grid item key={data.id}>
							<ShadowBox styles={data.shadow} />
						</Grid>
					))}
				{state.error && (
					<Paragraph className={classes.errorMessage}>{state.error}</Paragraph>
				)}
			</Grid>
		</div>
	);
};

export default LightBoxShadows;
