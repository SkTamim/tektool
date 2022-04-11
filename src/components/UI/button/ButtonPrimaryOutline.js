import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
	root: {
		color: theme.palette.primary.main,
		borderColor: theme.palette.primary.main,
		"&:hover": {
			backgroundColor: theme.palette.primary.text,
		},
	},
}));

const ButtonPrimaryOutline = (props) => {
	const classes = useStyle();
	return (
		<Button
			variant='outlined'
			className={`${classes.root} ${props.className}`}
			sx={props.sx}
			component={props.component}
			to={props.to}
		>
			{props.children}
		</Button>
	);
};

export default ButtonPrimaryOutline;
