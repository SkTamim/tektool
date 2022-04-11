import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import Numbering from "./Numbering";
import HeadingSecondary from "../UI/typography/HeadingSecondary";
import ButtonSecondaryOutline from "../UI/button/ButtonSecondaryOutline";
import ButtonPrimaryOutline from "../UI/button/ButtonPrimaryOutline";
import Paragraph from "../UI/typography/Paragraph";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "-2rem",
		borderTop: `1px solid ${theme.palette.accent.lightGrey}`,
	},
	leftGrid: {
		padding: "5rem 3rem",
		[theme.breakpoints.down("md")]: {
			padding: "0",
			paddingTop: "2rem",
		},
	},
	rightGrid: {
		padding: "5rem 3rem",
		textAlign: "right",
		[theme.breakpoints.down("sm")]: {
			padding: "0",
			paddingBottom: "2rem",
		},
	},
	paragraph: {},
}));
const Feature = (props) => {
	let myProps = props.feature;
	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			{myProps.order === "left" && (
				<Grid item sm={6} className={classes.leftGrid}>
					<Numbering number={myProps.number} />
					<HeadingSecondary color={myProps.color}>
						{myProps.heading}
					</HeadingSecondary>
					<Paragraph className={classes.paragraph}>
						{myProps.description}
					</Paragraph>
					<ButtonSecondaryOutline
						sx={{ my: 2 }}
						component={NavLink}
						to={myProps.to}
					>
						Go!
					</ButtonSecondaryOutline>
				</Grid>
			)}
			<Grid
				item
				sm={6}
				display='flex'
				alignItems='center'
				justifyContent='center'
				sx={{ m: "1rem auto" }}
			>
				<img
					src={myProps.img}
					alt={`Feature imgae ${myProps.number}`}
					style={{ height: "90%", padding: "1rem" }}
				/>
			</Grid>

			{myProps.order === "right" && (
				<Grid item sm={6} className={classes.rightGrid}>
					<Numbering number={myProps.number} sx={{ ml: "auto" }} />
					<HeadingSecondary color={myProps.color}>
						{myProps.heading}
					</HeadingSecondary>
					<Paragraph className={classes.paragraph}>
						{myProps.description}
					</Paragraph>
					<ButtonPrimaryOutline
						sx={{ my: 2 }}
						component={NavLink}
						to={myProps.to}
					>
						Go!
					</ButtonPrimaryOutline>
				</Grid>
			)}
		</Grid>
	);
};

export default Feature;
