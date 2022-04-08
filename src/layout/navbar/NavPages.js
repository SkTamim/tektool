import { Button, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
	desktopLinks: {
		color: theme.palette.darkBg.text,
		fontWeight: 400,
		fontSize: "0.9rem",
		"&.active": {
			backgroundColor: theme.palette.darkBg.bg,
			color: theme.palette.darkBg.text,
		},
	},
	mobileLinks: {
		textAlign: "center",
		"&.active": {
			backgroundColor: theme.palette.darkBg.bg,
			color: theme.palette.darkBg.text,
		},
	},
}));

export const DesktopPages = () => {
	const classes = useStyles();

	const home = (
		<Button
			sx={{ m: 1 }}
			className={classes.desktopLinks}
			component={NavLink}
			to='/'
			key='home'
		>
			Home
		</Button>
	);
	const resources = (
		<Button
			sx={{ m: 1 }}
			className={classes.desktopLinks}
			component={NavLink}
			to='/resources'
			key='resources'
		>
			Resources
		</Button>
	);
	const shadows = (
		<Button
			sx={{ m: 1 }}
			className={classes.desktopLinks}
			component={NavLink}
			to='/shadows'
			key='shadows'
		>
			Shadows
		</Button>
	);
	const textShadows = (
		<Button
			sx={{ m: 1 }}
			className={classes.desktopLinks}
			component={NavLink}
			to='/text-shadows'
			key='textShadows'
		>
			Text Shadows
		</Button>
	);
	const entities = (
		<Button
			sx={{ m: 1 }}
			className={classes.desktopLinks}
			component={NavLink}
			to='/entities'
			key='entities'
		>
			Entities
		</Button>
	);
	const learn = (
		<Button
			sx={{ m: 1 }}
			className={classes.desktopLinks}
			component={NavLink}
			to='/learn'
			key='learn'
		>
			Learn
		</Button>
	);
	const desktopPages = [home, resources, shadows, textShadows, entities, learn];

	return (
		<Box
			sx={{
				flexGrow: 1,
				display: { xs: "none", md: "flex" },
				justifyContent: "flex-end",
			}}
		>
			{desktopPages.map((page) => page)}
		</Box>
	);
};

export const MobilePages = () => {
	const classes = useStyles();

	const home = (
		<Button
			sx={{ m: 1, display: "block" }}
			className={classes.mobileLinks}
			component={NavLink}
			to='/'
			key='home'
		>
			Home
		</Button>
	);
	const resources = (
		<Button
			sx={{ m: 1, display: "block" }}
			className={classes.mobileLinks}
			component={NavLink}
			to='/resources'
			key='resources'
		>
			Resources
		</Button>
	);
	const shadows = (
		<Button
			sx={{ m: 1, display: "block" }}
			className={classes.mobileLinks}
			component={NavLink}
			to='/shadows'
			key='shadows'
		>
			Shadows
		</Button>
	);
	const textShadows = (
		<Button
			sx={{ m: 1, display: "block" }}
			className={classes.mobileLinks}
			component={NavLink}
			to='/text-shadows'
			key='textShadows'
		>
			Text Shadows
		</Button>
	);
	const entities = (
		<Button
			sx={{ m: 1, display: "block" }}
			className={classes.mobileLinks}
			component={NavLink}
			to='/html-entities'
			key='entities'
		>
			Entities
		</Button>
	);
	const learn = (
		<Button
			sx={{ m: 1, display: "block" }}
			className={classes.mobileLinks}
			component={NavLink}
			to='/learn'
			key='learn'
		>
			Learn
		</Button>
	);
	const logo = (
		<Logo key='logo' sx={{ m: 2, textAlign: "center", display: "block" }} />
	);
	const divider = <Divider key='divider' />;

	const mobilePages = [
		logo,
		divider,
		home,
		resources,
		shadows,
		textShadows,
		entities,
		learn,
	];

	return mobilePages.map((page) => page);
};
