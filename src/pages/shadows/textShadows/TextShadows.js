import React from "react";
import { makeStyles } from "@mui/styles";
import HeadingSecondary from "../../../components/UI/typography/HeadingSecondary";
import TextShadowComponent from "./TextShadowComponent";
import { Container } from "@mui/material";

const useStyles = makeStyles({});

const TextShadows = () => {
	const classes = useStyles();
	return (
		<Container maxWidth='xl' sx={{ py: 4 }} component='main'>
			<div style={{ textAlign: "center", padding: "1rem 0" }}>
				<HeadingSecondary>Text Shadows</HeadingSecondary>
			</div>

			<TextShadowComponent />
		</Container>
	);
};

export default TextShadows;
