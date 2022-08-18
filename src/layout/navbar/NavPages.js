import { Button, Divider, Menu, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const useStyles = makeStyles((theme) => ({
	desktopLinks: {
		color: theme.palette.darkBg.text,
		fontWeight: 400,
		"&.active": {
			backgroundColor: theme.palette.darkBg.bg,
			color: theme.palette.darkBg.text,
		},
	},
	dropdown: {
		"&.active ": {
			backgroundColor: theme.palette.darkBg.bg,
			color: theme.palette.darkBg.text,
		},
	},
	mobileLinks: {
		textAlign: "center",
		color: theme.palette.darkBg.bg,
		fontWeight: 500,
		padding: "6px 16px",
		"&.active": {
			backgroundColor: theme.palette.darkBg.bg,
			color: theme.palette.darkBg.text,
		},
	},
}));

export const DesktopPages = () => {
	const classes = useStyles();
	const [isShadowActive, setIsShadowActive] = useState(false);

	const [shadowsButton, setShadowsButton] = useState(null);
	const open = Boolean(shadowsButton);
	const handleShadowsButton = (event) => {
		setShadowsButton(event.currentTarget);
	};
	const handleShadowsButtonClose = (e) => {
		setShadowsButton(null);
	};

	useEffect(() => {
		const url = window.location.href.toString();
		if (url.includes("box-shadows") || url.includes("text-shadows")) {
			setIsShadowActive(true);
		} else {
			setIsShadowActive(false);
		}
	}, [shadowsButton]);

	const home = (
		<Button
			sx={{ m: 1 }}
			className={classes.desktopLinks}
			component={NavLink}
			to='/'
			key='home'
			onClick={() => setIsShadowActive(false)}
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
			onClick={() => setIsShadowActive(false)}
		>
			Resources
		</Button>
	);
	const shadows = (
		<div key='shadows'>
			<Button
				sx={{ m: 1 }}
				className={`${classes.desktopLinks} ${isShadowActive ? "active" : ""}`}
				id='basic-button'
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup='true'
				aria-expanded={open ? "true" : undefined}
				onClick={handleShadowsButton}
			>
				Shadows
				<KeyboardArrowDownIcon />
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={shadowsButton}
				open={open}
				onClose={handleShadowsButtonClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem
					className={classes.dropdown}
					onClick={handleShadowsButtonClose}
					to='/box-shadows'
					component={NavLink}
				>
					Box Shadows
				</MenuItem>
				<MenuItem
					className={classes.dropdown}
					onClick={handleShadowsButtonClose}
					to='/text-shadows'
					component={NavLink}
				>
					Text Shadows
				</MenuItem>
			</Menu>
		</div>
	);
	const entities = (
		<Button
			sx={{ m: 1 }}
			className={classes.desktopLinks}
			component={NavLink}
			to='/entities'
			key='entities'
			onClick={() => setIsShadowActive(false)}
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
			onClick={() => setIsShadowActive(false)}
		>
			Learn
		</Button>
	);
	const desktopPages = [home, resources, shadows, entities, learn];

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

	const [isShadowActive, setIsShadowActive] = useState(false);

	const [shadowsButton, setShadowsButton] = useState(null);
	const open = Boolean(shadowsButton);
	const handleShadowsButton = (event) => {
		setShadowsButton(event.currentTarget);
	};
	const handleShadowsButtonClose = (e) => {
		setShadowsButton(null);
	};

	useEffect(() => {
		const url = window.location.href.toString();
		if (url.includes("box-shadows") || url.includes("text-shadows")) {
			setIsShadowActive(true);
		} else {
			setIsShadowActive(false);
		}
	}, [shadowsButton]);

	const home = (
		<Button
			sx={{ m: 1, display: "block" }}
			className={classes.mobileLinks}
			component={NavLink}
			to='/'
			key='home'
			onClick={() => setIsShadowActive(false)}
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
			onClick={() => setIsShadowActive(false)}
		>
			Resources
		</Button>
	);
	const shadows = (
		<div key='shadows'>
			<Button
				sx={{ m: 1, display: "flex" }}
				className={`${classes.mobileLinks} ${isShadowActive ? "active" : ""}`}
				id='basic-button'
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup='true'
				aria-expanded={open ? "true" : undefined}
				onClick={handleShadowsButton}
			>
				Shadows
				<KeyboardArrowDownIcon />
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={shadowsButton}
				open={open}
				onClose={handleShadowsButtonClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem
					className={classes.dropdown}
					onClick={handleShadowsButtonClose}
					to='/box-shadows'
					component={NavLink}
				>
					Box Shadows
				</MenuItem>
				<MenuItem
					className={classes.dropdown}
					onClick={handleShadowsButtonClose}
					to='/text-shadows'
					component={NavLink}
				>
					Text Shadows
				</MenuItem>
			</Menu>
		</div>
	);
	const entities = (
		<Button
			sx={{ m: 1, display: "block" }}
			className={classes.mobileLinks}
			component={NavLink}
			to='/html-entities'
			key='entities'
			onClick={() => setIsShadowActive(false)}
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
			onClick={() => setIsShadowActive(false)}
		>
			Learn
		</Button>
	);
	const logo = (
		<Logo
			key='logo'
			sx={{
				m: 2,
				textAlign: "center",
				display: "block",
			}}
			style={{ height: "80px" }}
			color='blue'
		/>
	);
	const divider = <Divider key='divider' />;

	const mobilePages = [
		logo,
		divider,
		home,
		resources,
		shadows,
		entities,
		learn,
	];

	return mobilePages.map((page) => page);
};
