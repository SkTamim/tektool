import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundClip: "text",
		["-webkit-background-clip"]: "text",
		backgroundImage: `linear-gradient(90deg,${theme.palette.gradientBlue.dark},${theme.palette.gradientBlue.light})`,
		color: "transparent",
		display: "inline-block",
		textTransform: "uppercase",
		fontWeight: 500,
		padding: ".5rem 0",
	},
}));

const HeadingPrimary = (props) => {
	const classes = useStyles();
	return (
		<h1 className={`${classes.root} ${props.className}`} style={props.style}>
			{props.children}
		</h1>
	);
};

export default HeadingPrimary;
