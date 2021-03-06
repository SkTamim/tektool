import { makeStyles } from "@mui/styles";
import React from "react";
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

const ShadowTypeNavigator = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<MyChip label='Light Shadows' href='#light-shadows' />
			<MyChip label='Dark Shadows' href='#dark-shadows' />
			<MyChip label='Inset Shadows' href='#inset-shadows' />
			<MyChip label='Colored Shadows' href='#colored-shadows' />
		</div>
	);
};

export default ShadowTypeNavigator;
