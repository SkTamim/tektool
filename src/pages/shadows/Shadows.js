import React from "react";
import { Container } from "@mui/material";
import MyTab from "../../components/Tab/MyTab";
import BoxShadows from "./boxShadows/BoxShadows";
import TextShadows from "./textShadows/TextShadows";

const Shadows = () => {
	return (
		<Container maxWidth='xl' sx={{ py: 4 }} component='section'>
			<MyTab
				leftLabel='Box Shadows'
				rightLabel='Text Shadows'
				leftTab={<BoxShadows />}
				rightTab={<TextShadows />}
			/>
		</Container>
	);
};

export default Shadows;
