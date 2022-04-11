import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

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
		<Typography
			variant='h4'
			component='h1'
			gutterBottom
			className={`${classes.root} ${props.className}`}
			sx={props.sx}
		>
			{props.children}
		</Typography>
	);
};

export default HeadingPrimary;
