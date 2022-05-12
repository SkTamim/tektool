import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		borderBottom: `1px solid ${theme.palette.accent.darkGrey}`,
	},
	text: {
		padding: ".8rem",
		fontWeight: 500,
		fontSize: "1.3rem",
		color: theme.palette.accent.lightGrey,
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
