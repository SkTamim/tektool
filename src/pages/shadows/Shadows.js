import React from "react";
import { Container } from "@mui/material";
import ShadowsTab from "./shadowsTab/ShadowsTab";
import BoxShadows from "./boxShadows/BoxShadows";

const Shadows = () => {
	return (
		<Container maxWidth='xl' sx={{ py: 4 }} component='section'>
			<ShadowsTab />
			<BoxShadows />
		</Container>
	);
};

export default Shadows;
