import React, { useEffect } from "react";
import HeadingSecondary from "../../../components/UI/typography/HeadingSecondary";
import TextShadowComponent from "./TextShadowComponent";
import { Container } from "@mui/material";


const TextShadows = () => {
	useEffect(() => {
		document.title = "TekTool - Text Shadows"
	}, [])

	return (
		<Container maxWidth='xl' sx={{ py: 4 }} component='section'>
			<div style={{ textAlign: "center", padding: "1rem 0" }}>
				<HeadingSecondary>Text Shadows</HeadingSecondary>
			</div>

			<TextShadowComponent />
		</Container>
	);
};

export default TextShadows;
