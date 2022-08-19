import React, { useEffect, useReducer } from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
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

const BoxShadowComponent = (props) => {
	const classes = useStyles();
	const [state, dispatch] = useReducer(reducer, initialDataState);

	let boxShadowType = props.shadowType.toLowerCase();

	useEffect(() => {
		fetch("box-shadows.json")
			.then((responce) => responce.json())
			.then((result) => {
				dispatch({
					type: "FETCH_SUCCESS",
					payload:
						(boxShadowType === "light" && result.light) ||
						(boxShadowType === "dark" && result.dark) ||
						(boxShadowType === "inset" && result.inset) ||
						(boxShadowType === "colored" && result.colored),
				});
			})
			.catch(() => dispatch({ type: "FETCH_ERROR" }));
	}, []);

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
		</div>
	);
};

export default BoxShadowComponent;
