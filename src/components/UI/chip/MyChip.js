import React from "react";
import { Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		margin: 0,
		backgroundColor: theme.palette.secondary.text,
		border: `1px solid ${theme.palette.secondary.dark}`,
		color: theme.palette.secondary.dark,
		height: "40px",
		padding: ".5rem 1rem",
		fontSize: "1rem",
		borderRadius: "20px",
		"&:hover": {
			backgroundColor: "#A8F4FF",
		},
		"&.active": {
			backgroundColor: theme.palette.secondary.dark,
			color: theme.palette.secondary.text,
		},
	},
}));

const MyChip = (props) => {
	const classes = useStyles();
	return (
		<Chip
			className={classes.root}
			label={props.label}
			component={NavLink}
			to={props.to}
			clickable
			sx={props.sx}
		/>
	);
};

export default MyChip;
