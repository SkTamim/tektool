import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
	root: {
		color: theme.palette.accent.darkGrey,
		margin: ".5rem 0",
	},
}));

const Paragraph = (props) => {
	const classes = useStyles();
	return (
		<Typography
			component='p'
			className={`${classes.root} ${props.className}`}
			style={props.style}
			sx={props.sx}
		>
			{props.children}
		</Typography>
	);
};

export default Paragraph;
