import React from "react";
import { Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		margin: "0 1rem",
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
	},
}));

const MyChip = (props) => {
	const classes = useStyles();
	return (
		<Chip
			className={classes.root}
			label={props.label}
			component='a'
			href={props.href}
			clickable
			sx={props.sx}
		/>
	);
};

export default MyChip;
