import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import React from "react";
import HeadingSecondary from "../../../components/UI/typography/HeadingSecondary";
import BoxShadowComponent from "./BoxShadowComponent";
import LightBoxShadows from "./LightBoxShadows";
import ShadowTypeNavigator from "./ShadowTypeNavigator";

const BoxShadows = () => {
	return (
		<Container maxWidth='xl' sx={{ py: 4 }} component='section'>
			<ShadowTypeNavigator />

			{/* <BoxShadowComponent shadowType='Light' shadowId='light-shadows' />
			<BoxShadowComponent shadowType='Dark' shadowId='dark-shadows' />
			<BoxShadowComponent shadowType='Inset' shadowId='inset-shadows' />
			<BoxShadowComponent shadowType='Colored' shadowId='colored-shadows' /> */}
			{/* <LightBoxShadows shadowType='Light' shadowId='light-shadows' /> */}
			<Outlet />
		</Container>
	);
};

export default BoxShadows;
