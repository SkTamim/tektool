import React from "react";
import { makeStyles } from "@mui/styles";
import MyChip from "../../../components/UI/chip/MyChip";

const useStyles = makeStyles({
	root: {
		padding: "1rem 0",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",
	},
});

const EntityTypeNavigator = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<MyChip label='Arrows' href='#arrows' />
			<MyChip label='Symbols' href='#symbols' />
			<MyChip label='Currency' href='#currency' />
			<MyChip label='Punctuation' href='#punctuation' />
			<MyChip label='Math' href='#math' />
			<MyChip label='Numbers' href='#numbers' />
			<MyChip label='Letters' href='#letters' />
		</div>
	);
};

export default EntityTypeNavigator;
