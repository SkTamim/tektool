import React, { useEffect } from "react";
import EntityTypeNavigator from "./EntityTypeNavigator";
import { Outlet } from "react-router-dom";

const HtmlEntities = () => {
	useEffect(() => {
		document.title = "TekTool - HTML entities"
	}, [])

	return (
		<>
			<EntityTypeNavigator />
			<Outlet />
		</>
	);
};

export default HtmlEntities;
