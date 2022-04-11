import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		color: theme.palette.accent.darkGrey,
		margin: ".5rem 0",
	},
}));

const Paragraph = (props) => {
	const classes = useStyles();
	return (
		<p className={`${classes.root} ${props.className}`} style={props.style}>
			{props.children}
		</p>
	);
};

export default Paragraph;
