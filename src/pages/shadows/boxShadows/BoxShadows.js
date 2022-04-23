import { makeStyles } from "@mui/styles";
import React from "react";
import HeadingSecondary from "../../../components/UI/typography/HeadingSecondary";
import DarkBoxShadows from "./DarkBoxShadows";
import LightBoxShadows from "./LightBoxShadows";

const useStyles = makeStyles((theme) => ({
	root: {},
	mainHeading: {
		position: "absolute",
		left: "50%",
		transform: "translateX(-50%)",
		width: "max-content",
	},
}));

const BoxShadows = () => {
	const classes = useStyles();
	return (
		<>
			<HeadingSecondary className={classes.mainHeading}>
				Box Shadows
			</HeadingSecondary>

			<LightBoxShadows />
			<DarkBoxShadows />
		</>
	);
};

export default BoxShadows;
