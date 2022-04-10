import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HeadingPrimary from "../../components/UI/typography/HeadingPrimary";
import Paragraph from "../../components/UI/typography/Paragraph";
import ButtonPrimary from "../../components/UI/button/ButtonPrimary";

import heroImage from "../../assets/images/Software engineer-amico.svg";

const useStyles = makeStyles((theme) => ({
	leftGrid: {
		marginTop: "8rem",
		paddingLeft: "1rem",
		[theme.breakpoints.down("sm")]: {
			marginTop: "3rem",
			paddingLeft: "0",
		},
	},
	mainHeading: {
		fontSize: "3rem",
		[theme.breakpoints.down("lg")]: {
			fontSize: "2.3rem",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "2rem",
		},
	},
	paragraph: {
		maxWidth: "80%",
		[theme.breakpoints.down("md")]: {
			maxWidth: "100%",
			marginRight: ".5rem",
		},
	},
}));

const Hero = () => {
	const classes = useStyles();
	return (
		<Container maxWidth='xl'>
			<Grid container>
				<Grid item sm={6} className={classes.leftGrid}>
					<HeadingPrimary className={classes.mainHeading}>
						Welcome to TekTool
					</HeadingPrimary>
					<Typography
						variant='subtitle1'
						paragraph
						sx={{
							mt: -2,
							ml: "5px",
							mb: 0,
							color: (theme) => theme.palette.primary.light,
						}}
					>
						The all in one plateform for developers
					</Typography>
					<Paragraph className={classes.paragraph}>
						TekTool is an all-in-one platform for developers. where developers
						can find various kinds of useful tools and resources.
					</Paragraph>
					<ButtonPrimary
						sx={{ width: "max-content", mb: 2 }}
						size='large'
						to='/resources'
						component={NavLink}
					>
						Explore
					</ButtonPrimary>
				</Grid>
				<Grid
					item
					sm={6}
					display='flex'
					alignItems='center'
					justifyContent='center'
				>
					<img
						src={heroImage}
						alt='Software engineer building software'
						style={{ height: "80%", margin: "1rem" }}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Hero;
