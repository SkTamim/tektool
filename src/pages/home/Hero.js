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
		marginTop: "6rem",
		[theme.breakpoints.down("md")]: {
			marginTop: "4rem",
			paddingLeft: "0",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "3rem",
		},
	},
	mainHeading: {
		fontSize: "3rem",
		[theme.breakpoints.down("lg")]: {
			fontSize: "2.3rem",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "2.2rem",
		},
	},
	paragraph: {
		maxWidth: "85%",
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
						TekTool is a one-stop platform specifically designed for the
						ever-growing, demanding needs of developers, providing a complete
						array of tools, resources, tutorials and a variety of other things
						to facilitate maximum productivity.
					</Paragraph>
					<ButtonPrimary
						sx={{ width: "max-content", mb: 4, mt: 2 }}
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
