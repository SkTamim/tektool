import React, { useEffect } from "react";
import EntityTypeNavigator from "./EntityTypeNavigator";
import { Outlet } from "react-router-dom";

const EmojiEntities = () => {
	useEffect(() => {
		document.title = "TekTool - Emoji entities"
	}, [])


	return (
		<>
			<EntityTypeNavigator />
			<Outlet />
		</>
	);
};

export default EmojiEntities;
