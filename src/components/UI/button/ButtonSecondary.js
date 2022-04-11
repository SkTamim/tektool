import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.secondary.text,
		"&:hover": {
			backgroundColor: theme.palette.secondary.dark,
		},
	},
}));

const ButtonSecondary = (props) => {
	const classes = useStyle();
	return (
		<Button
			variant='contained'
			className={`${classes.root} ${props.className}`}
			sx={props.sx}
			component={props.component}
			to={props.to}
		>
			{props.children}
		</Button>
	);
};

export default ButtonSecondary;
