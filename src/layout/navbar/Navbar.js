import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import {
	Box,
	Container,
	IconButton,
	SwipeableDrawer,
	Toolbar,
} from "@mui/material";
import HideAppBar from "./HideOnScroll";
import { DesktopPages, MobilePages } from "./NavPages";
import Logo from "./Logo";

const Navbar = () => {
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
	return (
		<>
			<HideAppBar>
				<Toolbar component='nav'>
					<Container disableGutters maxWidth='xl' sx={{ display: "flex" }}>
						<Logo
							sx={{
								display: { xs: "none", md: "flex" },
								alignItems: "center",
							}}
						/>

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

						<Logo
							sx={{
								display: { xs: "flex", md: "none" },
								justifyContent: "flex-end",
								alignItems: "center",
							}}
						/>

						<DesktopPages />
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
					onClick={toggleDrawer(true)}
					onKeyDown={toggleDrawer(true)}
					sx={{ px: 3 }}
				>
					<MobilePages />
				</Box>
			</SwipeableDrawer>
		</>
	);
};

export default Navbar;
