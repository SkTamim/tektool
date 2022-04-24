import React from "react";
import { Container } from "@mui/material";
import ShadowsTab from "./shadowsTab/ShadowsTab";

const Shadows = () => {
	return (
		<Container maxWidth='xl' sx={{ py: 4 }} component='section'>
			<ShadowsTab />
		</Container>
	);
};

export default Shadows;
