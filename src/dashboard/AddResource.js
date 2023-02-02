import React from "react";
import { Container, Stack } from "@mui/material";
import HeadingSecondary from "../components/UI/typography/HeadingSecondary";
import Paragraph from "../components/UI/typography/Paragraph";
import AddResourceForm from "./AddResourceForm";

import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

const AddResource = () => {

	return (
		<Container maxWidth='md' sx={{ py: 4 }} component='main'>
			<Stack
				textAlign='center'
				justifyContent='center'
				alignItems='center'
				direction='row'
			>
				<AddToPhotosIcon sx={{ mr: 2, fontSize: "30px", color: "#008DA3" }} />
				<HeadingSecondary>Add Resource</HeadingSecondary>
			</Stack>
			<Paragraph sx={{ textAlign: "center", mt: "-5px !important" }}>
				Add a resource, it will help developers like you
			</Paragraph>
			<AddResourceForm />
		</Container>
	);
};

export default AddResource;
