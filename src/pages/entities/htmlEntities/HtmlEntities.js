import React from "react";
import EntityTypeNavigator from "./EntityTypeNavigator";
import { Outlet } from "react-router-dom";

const HtmlEntities = () => {
	return (
		<>
			<EntityTypeNavigator />
			<Outlet />
		</>
	);
};

export default HtmlEntities;
