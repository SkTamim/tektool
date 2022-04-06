import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
	root: {
		color: theme.palette.secondary.main,
		borderColor: theme.palette.secondary.main,
		"&:hover": {
			backgroundColor: theme.palette.secondary.text,
		},
	},
}));

const ButtonSecondaryOutline = (props) => {
	const classes = useStyle();
	return (
		<Button
			variant='outlined'
			className={`${classes.root} ${props.className}`}
			sx={props.sx}
		>
			{props.children}
		</Button>
	);
};

export default ButtonSecondaryOutline;
