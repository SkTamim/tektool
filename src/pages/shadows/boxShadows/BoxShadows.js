import { makeStyles } from "@mui/styles";
import React from "react";
import HeadingSecondary from "../../../components/UI/typography/HeadingSecondary";
import BoxShadowComponent from "./BoxShadowComponent";

const useStyles = makeStyles({
	mainHeading: {
		position: "absolute",
		left: "50%",
		transform: "translateX(-50%)",
		width: "max-content",
	},
});

const BoxShadows = () => {
	const classes = useStyles();
	return (
		<>
			<HeadingSecondary className={classes.mainHeading}>
				Box Shadows
			</HeadingSecondary>

			<BoxShadowComponent shadowType='Light' />
			<BoxShadowComponent shadowType='Dark' />
			<BoxShadowComponent shadowType='Inset' />
			<BoxShadowComponent shadowType='Colored' />
		</>
	);
};

export default BoxShadows;
