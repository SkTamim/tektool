import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

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
	const { character, entity, hex, css, unicode, name } = props.data;
	const classes = useStyles();

	const copyTextHandler = (copyData) => {
		navigator.clipboard.writeText(copyData);
		props.copyTostHandler(true);
	};

	return (
		<>
			<tr className={classes.root}>
				<td onClick={() => copyTextHandler(character)} className={classes.text}>
					{character}
				</td>
				<td onClick={() => copyTextHandler(entity)} className={classes.text}>
					{entity}
				</td>
				<td onClick={() => copyTextHandler(hex)} className={classes.text}>
					{hex}
				</td>
				<td onClick={() => copyTextHandler(css)} className={classes.text}>
					{css}
				</td>
				<td onClick={() => copyTextHandler(unicode)} className={classes.text}>
					{unicode}
				</td>
				<td className={classes.text} style={{ maxWidth: "200px" }}>
					{name}
				</td>
			</tr>
		</>
	);
};

export default EntityRow;
