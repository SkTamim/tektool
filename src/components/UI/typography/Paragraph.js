import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		color: theme.palette.accent.darkGrey,
	},
}));

const Paragraph = (props) => {
	const classes = useStyles();
	return (
		<p className={`${classes.root} ${props.className}`} sx={props.sx}>
			{props.children}
		</p>
	);
};

export default Paragraph;
