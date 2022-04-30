import React from "react";
import { makeStyles } from "@mui/styles";
import HeadingSecondary from "../../../components/UI/typography/HeadingSecondary";
import TextShadowComponent from "./TextShadowComponent";

const useStyles = makeStyles({});

const TextShadows = () => {
	const classes = useStyles();
	return (
		<>
			<div style={{ textAlign: "center", padding: "1rem 0" }}>
				<HeadingSecondary>Text Shadows</HeadingSecondary>
			</div>

			<TextShadowComponent />
		</>
	);
};

export default TextShadows;
