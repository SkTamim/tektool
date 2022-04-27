import React from "react";
import { makeStyles } from "@mui/styles";
import HeadingSecondary from "../../../components/UI/typography/HeadingSecondary";
import TextShadowComponent from "./TextShadowComponent";

const useStyles = makeStyles({
	mainHeading: {
		position: "absolute",
		left: "50%",
		transform: "translateX(-50%)",
		width: "max-content",
		padding: "2rem 0",
	},
});

const TextShadows = () => {
	const classes = useStyles();
	return (
		<>
			<HeadingSecondary className={classes.mainHeading}>
				Text Shadows
			</HeadingSecondary>

			<TextShadowComponent />
		</>
	);
};

export default TextShadows;
