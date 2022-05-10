import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

import logoBlack from "../../assets/images/Logo/Black Logo.svg";
import logoBlue from "../../assets/images/Logo/Blue Logo.svg";
import logoGreen from "../../assets/images/Logo/Green Logo.svg";

const useStyles = makeStyles(() => ({
	imageStyle: { height: "50px" },
}));

const Logo = (props) => {
	const classes = useStyles();
	return (
		<Box component={NavLink} to='/' sx={props.sx}>
			{!props.color && (
				<img
					src={logoBlack}
					alt='Logo'
					className={classes.imageStyle}
					style={props.style}
				/>
			)}
			{props.color === "blue" && (
				<img
					src={logoBlue}
					alt='Logo'
					className={classes.imageStyle}
					style={props.style}
				/>
			)}
			{props.color === "green" && (
				<img
					src={logoGreen}
					alt='Logo'
					className={classes.imageStyle}
					style={props.style}
				/>
			)}
		</Box>
	);
};

export default Logo;
