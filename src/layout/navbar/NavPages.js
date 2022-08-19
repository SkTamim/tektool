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

export const DesktopPages = ({ navActive }) => {
	const classes = useStyles();
	const [isShadowActive, setIsShadowActive] = useState(false);
	const [isEntityActive, setIsEntityActive] = useState(false);

	const [shadowsButton, setShadowsButton] = useState(null);
	const open = Boolean(shadowsButton);
	const handleShadowsButton = (event) => {
		setShadowsButton(event.currentTarget);
		setIsEntityActive(false);
	};
	const handleShadowsButtonClose = (e) => {
		setShadowsButton(null);
	};

	const [entitiesButton, setEntitiesButton] = useState(null);
	const entitiesOpen = Boolean(entitiesButton);
	const handleEntitiesButton = (event) => {
		setEntitiesButton(event.currentTarget);
		setIsShadowActive(false);
	};
	const handleEntitiesButtonClose = (e) => {
		setEntitiesButton(null);
	};

	useEffect(() => {
		const url = window.location.href.toString();
		if (url.includes("box-shadows") || url.includes("text-shadows")) {
			setIsShadowActive(true);
		} else {
			setIsShadowActive(false);
		}
	}, [shadowsButton, navActive]);

	useEffect(() => {
		const url = window.location.href.toString();
		if (url.includes("html-entities") || url.includes("emoji-entities")) {
			setIsEntityActive(true);
		} else {
			setIsEntityActive(false);
		}
	}, [entitiesButton, navActive]);

	const home = (
		<Button
			sx={{ m: 1 }}
			className={classes.desktopLinks}
			component={NavLink}
			to='/'
			key='home'
			onClick={() => {
				setIsShadowActive(false);
				setIsEntityActive(false);
			}}
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
			onClick={() => {
				setIsShadowActive(false);
				setIsEntityActive(false);
			}}
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
		<div key='entities'>
			<Button
				sx={{ m: 1 }}
				onClick={handleEntitiesButton}
				className={`${classes.desktopLinks} ${isEntityActive ? "active" : ""}`}
				id='basic-button2'
				aria-controls={entitiesOpen ? "basic-menu2" : undefined}
				aria-haspopup='true'
				aria-expanded={entitiesOpen ? "true" : undefined}
			>
				Entities
				<KeyboardArrowDownIcon />
			</Button>

			<Menu
				id='basic-menu2'
				anchorEl={entitiesButton}
				open={entitiesOpen}
				onClose={handleEntitiesButtonClose}
				MenuListProps={{
					"aria-labelledby": "basic-button2",
				}}
			>
				<MenuItem
					className={classes.dropdown}
					onClick={handleEntitiesButtonClose}
					to='/html-entities'
					component={NavLink}
				>
					HTML Entities
				</MenuItem>
				<MenuItem
					className={classes.dropdown}
					onClick={handleEntitiesButtonClose}
					to='/emoji-entities'
					component={NavLink}
				>
					Emoji Entities
				</MenuItem>
			</Menu>
		</div>
	);
	const learn = (
		<Button
			sx={{ m: 1 }}
			className={classes.desktopLinks}
			component={NavLink}
			to='/learn'
			key='learn'
			onClick={() => {
				setIsShadowActive(false);
				setIsEntityActive(false);
			}}
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

export const MobilePages = ({ navActive }) => {
	const classes = useStyles();

	const [isShadowActive, setIsShadowActive] = useState(false);
	const [isEntityActive, setIsEntityActive] = useState(false);

	const [shadowsButton, setShadowsButton] = useState(null);
	const open = Boolean(shadowsButton);
	const handleShadowsButton = (event) => {
		setShadowsButton(event.currentTarget);
		setIsEntityActive(false);
	};
	const handleShadowsButtonClose = (e) => {
		setShadowsButton(null);
	};

	const [entitiesButton, setEntitiesButton] = useState(null);
	const entitiesOpen = Boolean(entitiesButton);
	const handleEntitiesButton = (event) => {
		setEntitiesButton(event.currentTarget);
		setIsShadowActive(false);
	};
	const handleEntitiesButtonClose = (e) => {
		setEntitiesButton(null);
	};

	useEffect(() => {
		const url = window.location.href.toString();
		if (url.includes("box-shadows") || url.includes("text-shadows")) {
			setIsShadowActive(true);
		} else {
			setIsShadowActive(false);
		}
	}, [shadowsButton, navActive]);

	useEffect(() => {
		const url = window.location.href.toString();
		if (url.includes("html-entities") || url.includes("emoji-entities")) {
			setIsEntityActive(true);
		} else {
			setIsEntityActive(false);
		}
	}, [entitiesButton, navActive]);

	const home = (
		<Button
			sx={{ m: 1, display: "block" }}
			className={classes.mobileLinks}
			component={NavLink}
			to='/'
			key='home'
			onClick={() => {
				setIsShadowActive(false);
				setIsEntityActive(false);
			}}
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
			onClick={() => {
				setIsShadowActive(false);
				setIsEntityActive(false);
			}}
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
		<div key='entities'>
			<Button
				sx={{ m: 1, display: "flex" }}
				onClick={handleEntitiesButton}
				className={`${classes.mobileLinks} ${isEntityActive ? "active" : ""}`}
				id='basic-button2'
				aria-controls={entitiesOpen ? "basic-menu2" : undefined}
				aria-haspopup='true'
				aria-expanded={entitiesOpen ? "true" : undefined}
			>
				Entities
				<KeyboardArrowDownIcon />
			</Button>

			<Menu
				id='basic-menu2'
				anchorEl={entitiesButton}
				open={entitiesOpen}
				onClose={handleEntitiesButtonClose}
				MenuListProps={{
					"aria-labelledby": "basic-button2",
				}}
			>
				<MenuItem
					className={classes.dropdown}
					onClick={handleEntitiesButtonClose}
					to='/html-entities'
					component={NavLink}
				>
					HTML Entities
				</MenuItem>
				<MenuItem
					className={classes.dropdown}
					onClick={handleEntitiesButtonClose}
					to='/emoji-entities'
					component={NavLink}
				>
					Emoji Entities
				</MenuItem>
			</Menu>
		</div>
	);
	const learn = (
		<Button
			sx={{ m: 1, display: "block" }}
			className={classes.mobileLinks}
			component={NavLink}
			to='/learn'
			key='learn'
			onClick={() => {
				setIsShadowActive(false);
				setIsEntityActive(false);
			}}
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
