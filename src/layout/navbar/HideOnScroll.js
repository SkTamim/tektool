import React from "react";
import { AppBar, Slide, useScrollTrigger } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.gradientBlue.dark,
		backgroundImage: `linear-gradient(90deg,${theme.palette.gradientBlue.light} 10%, ${theme.palette.gradientBlue.dark} 50%)`,
	},
}));

const HideOnScroll = (props) => {
	const { children } = props;
	const trigger = useScrollTrigger();

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
};

const HideAppBar = (props) => {
	const classes = useStyles();
	return (
		<HideOnScroll {...props}>
			<AppBar className={classes.root}>{props.children}</AppBar>
		</HideOnScroll>
	);
};

export default HideAppBar;
