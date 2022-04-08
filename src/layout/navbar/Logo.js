import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	logo: {
		color: theme.palette.primary.text,
	},
}));

const Logo = (props) => {
	const classes = useStyles();
	return (
		<Typography
			variant='h6'
			noWrap
			component={NavLink}
			to='/'
			sx={props.sx}
			className={classes.logo}
			{...props}
		>
			TekTool
		</Typography>
	);
};

export default Logo;
