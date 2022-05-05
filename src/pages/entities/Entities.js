import { Container } from "@mui/material";
import React from "react";
import MyTab from "../../components/Tab/MyTab";
import HtmlEntities from "./htmlEntities/HtmlEntities";
import EmojiEntities from "./emojiEntities/EmojiEntities";

const Entities = () => {
	return (
		<>
			<Container maxWidth='xl' sx={{ py: 4 }} component='section'>
				<MyTab
					leftLabel='HTML Entities'
					rightLabel='Emoji Entities'
					leftTab={<HtmlEntities />}
					rightTab={<EmojiEntities />}
				/>
			</Container>
		</>
	);
};

export default Entities;
