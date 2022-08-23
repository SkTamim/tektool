import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import React from "react";
import ShadowTypeNavigator from "./ShadowTypeNavigator";

const BoxShadows = () => {
	return (
		<Container maxWidth='xl' sx={{ py: 4 }} component='section'>
			<ShadowTypeNavigator />
			<Outlet />
		</Container>
	);
};

export default BoxShadows;
