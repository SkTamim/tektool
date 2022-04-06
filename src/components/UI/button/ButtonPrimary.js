import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.text,
		"&:hover": {
			backgroundColor: theme.palette.primary.dark,
		},
	},
}));

const ButtonPrimary = (props) => {
	const classes = useStyle();
	return (
		<Button
			variant='contained'
			className={`${classes.root} ${props.className}`}
			sx={props.sx}
		>
			{props.children}
		</Button>
	);
};

export default ButtonPrimary;
