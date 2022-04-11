import React from "react";
import { makeStyles } from "@mui/styles";

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
		<h2
			className={`${classes.root} ${props.color && classes.blue} ${
				props.className
			}`}
			sx={props.sx}
		>
			{props.children}
		</h2>
	);
};

export default HeadingSecondary;
