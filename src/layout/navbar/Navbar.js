import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import {
	Box,
	Container,
	IconButton,
	Typography,
	Button,
	SwipeableDrawer,
	Toolbar,
} from "@mui/material";
import HideAppBar from "./HideOnScroll";

const useStyles = makeStyles((theme) => ({
	desktopLinks: {
		color: theme.palette.darkBg.color,
		fontWeight: 400,
		fontSize: "0.9rem",
		"&.active": {
			backgroundColor: theme.palette.darkBg.bg,
		},
	},
}));

const Navbar = () => {
	const classes = useStyles();

	// Drawer State & Function
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const toggleDrawer = (open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setIsDrawerOpen(open);
	};

	const home = (
		<Button
			sx={{ m: 1 }}
			className={classes.desktopLinks}
			component={NavLink}
			to='/home'
			key='home'
		>
			Home
		</Button>
	);
	// const resources = (
	// 	<Button
	// 		sx={{ m: 1 }}
	// 		className={classes.desktopLinks}
	// 		component={NavLink}
	// 		to='/resources'
	// 		key='resources'
	// 	>
	// 		Resources
	// 	</Button>
	// );
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
			to='/html-entities'
			key='entities'
		>
			Entities
		</Button>
	);

	const pages = [home, shadows, textShadows, entities];
	return (
		<>
			<HideAppBar>
				<Toolbar>
					<Container disableGutters maxWidth='xl' sx={{ display: "flex" }}>
						<Typography
							variant='h6'
							noWrap
							component={NavLink}
							to='/home'
							sx={{
								mr: 2,
								ml: 2,
								display: { xs: "none", md: "flex" },
								alignItems: "center",
								color: "#fff",
							}}
						>
							LOGO
						</Typography>

						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<IconButton
								size='large'
								aria-label='open drawer'
								edge='start'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								color='inherit'
								onClick={toggleDrawer(true)}
							>
								<MenuIcon />
							</IconButton>
						</Box>

						<Typography
							variant='h6'
							noWrap
							component={NavLink}
							to='/home'
							sx={{
								flexGrow: 1,
								display: { xs: "flex", md: "none" },
								justifyContent: "flex-end",
								alignItems: "center",
								color: "#fff",
							}}
						>
							LOGO
						</Typography>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "none", md: "flex" },
								justifyContent: "flex-end",
							}}
						>
							{pages.map((page) => page)}
						</Box>
					</Container>
				</Toolbar>
			</HideAppBar>

			{/* Drawer  */}
			<SwipeableDrawer
				anchor='left'
				open={isDrawerOpen}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
			>
				<Box
					role='presentation'
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
				>
					{pages.map((page) => (
						<Button key={page} sx={{ m: 2, display: "block" }}>
							{page}
						</Button>
					))}
				</Box>
			</SwipeableDrawer>
		</>
	);
};

export default Navbar;
