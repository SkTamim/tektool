import React from "react";
import HeadingSecondary from "../../../components/UI/typography/HeadingSecondary";
import BoxShadowComponent from "./BoxShadowComponent";
import ShadowTypeNavigator from "./ShadowTypeNavigator";

const BoxShadows = () => {
	return (
		<>
			<div style={{ textAlign: "center", padding: "1rem 0" }}>
				<HeadingSecondary>Box Shadows</HeadingSecondary>
			</div>
			<ShadowTypeNavigator />

			<BoxShadowComponent shadowType='Light' shadowId='light-shadows' />
			<BoxShadowComponent shadowType='Dark' shadowId='dark-shadows' />
			<BoxShadowComponent shadowType='Inset' shadowId='inset-shadows' />
			<BoxShadowComponent shadowType='Colored' shadowId='colored-shadows' />
		</>
	);
};

export default BoxShadows;
