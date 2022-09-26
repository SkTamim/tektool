import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HeadingPrimary from "../../components/UI/typography/HeadingPrimary";
import Paragraph from "../../components/UI/typography/Paragraph";
import ButtonPrimary from "../../components/UI/button/ButtonPrimary";

import heroImage from "../../assets/images/Software engineer-amico.svg";

const useStyles = makeStyles((theme) => ({
	mainHeading: {
		[theme.breakpoints.up("lg")]: {
			fontSize: "3rem",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "1.5rem",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.4rem",
		},
	},
	subHeading: {
		[theme.breakpoints.down("md")]: {
			fontSize: ".8rem",
		},
		[theme.breakpoints.down("sm")]: {
			marginLeft: 0,
		},
	},
	leftGrid: {
		marginTop: "6rem",
		[theme.breakpoints.down("md")]: {
			marginTop: "2.5rem",
			paddingLeft: "0",
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
						className={classes.subHeading}
						variant='h6'
						component='p'
						sx={{
							mt: -2,
							ml: "5px",
							mb: 0,
							color: (theme) => theme.palette.primary.light,
						}}
					>
						The all in one plateform for developers
					</Typography>
					<Paragraph>
						TekTool is a one-stop platform made for Developers to provide
						various kinds of Free productivity tools, Development related
						resources, Learning resources, tutorials, and a variety of other
						things to facilitate maximum productivity.
					</Paragraph>
					<ButtonPrimary
						sx={{ width: "max-content", mb: 10, mt: 2 }}
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
