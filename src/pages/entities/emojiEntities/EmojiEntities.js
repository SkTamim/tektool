import React from "react";
import EntityTypeNavigator from "./EntityTypeNavigator";
import { Outlet } from "react-router-dom";

const EmojiEntities = () => {
	return (
		<>
			<EntityTypeNavigator />
			<Outlet />
		</>
	);
};

export default EmojiEntities;
