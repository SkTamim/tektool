import React from "react";
import { Container, Grid } from "@mui/material";
import ShadowsTab from "./shadowsTab/ShadowsTab";
import BoxShadows from "./boxShadows/BoxShadows";

const Shadows = () => {
	return (
		<Container maxWidth='xl' sx={{ py: 3, height: "100vh" }}>
			<ShadowsTab />
		</Container>
	);
};

export default Shadows;
