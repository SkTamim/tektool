import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundClip: "text",
		["-webkit-background-clip"]: "text",
		backgroundImage: `linear-gradient(90deg,${theme.palette.gradientGreen.dark},${theme.palette.gradientGreen.light})`,
		color: "transparent",
		display: "inline-block",
		textTransform: "uppercase",
		fontWeight: 500,
		padding: ".5rem 0",
	},
	blue: {
		backgroundImage: `linear-gradient(90deg,${theme.palette.gradientBlue.dark},${theme.palette.gradientBlue.light})`,
	},
}));

const HeadingSecondary = (props) => {
	const classes = useStyles();
	return (
		<Typography
			className={`${classes.root} ${props.color && classes.blue} ${
				props.className
			}`}
			sx={props.sx}
			variant='h5'
			componetn='h2'
		>
			{props.children}
		</Typography>
	);
};

export default HeadingSecondary;
