import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		borderBottom: `1px solid ${theme.palette.accent.darkGrey}`,
	},
	text: {
		padding: ".8rem",
		textAlign: "center",
		color: theme.palette.secondary.dark,
		"&:first-child": {
			fontWeight: "bold",
			fontSize: "1.5rem",
		},
	},
}));

const EntityRow = (props) => {
	const classes = useStyles();
	return (
		<tr className={classes.root}>
			<td className={classes.text}>{props.data.character}</td>
			<td className={classes.text}>{props.data.entity}</td>
			<td className={classes.text}>{props.data.hex}</td>
			<td className={classes.text}>{props.data.css}</td>
			<td className={classes.text}>{props.data.unicode}</td>
			<td className={classes.text} style={{ maxWidth: "200px" }}>
				{props.data.name}
			</td>
		</tr>
	);
};

export default EntityRow;
