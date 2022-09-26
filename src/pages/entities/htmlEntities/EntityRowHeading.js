import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		borderBottom: `1px solid #eee`,
		backgroundColor: "#85d9ff",
	},
	text: {
		padding: ".8rem",
		fontWeight: 500,
		fontSize: "1.1rem",
		color: theme.palette.accent.darkGrey,
		textTransform: "uppercase",
		whiteSpace: "nowrap",

		"&:first-child": {
			position: "sticky",
			left: 0,
			backgroundColor: "#85d9ff",
			zIndex: "2",
		},
	},
}));

const EntityRowHeading = () => {
	const classes = useStyles();
	return (
		<tr className={classes.root}>
			<th className={classes.text}>Symbol</th>
			<th className={classes.text}>Entity</th>
			<th className={classes.text}>HTML Code</th>
			<th className={classes.text}>CSS Code</th>
			<th className={classes.text}>Unicode</th>
			<th className={classes.text}>Name</th>
		</tr>
	);
};

export default EntityRowHeading;
