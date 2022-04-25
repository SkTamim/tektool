import React from "react";
import { useScrollTrigger, Box, Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	scrollTopButton: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.secondary.text,
		width: "50px",
		height: "50px",
		"&:hover": {
			backgroundColor: theme.palette.secondary.dark,
		},
	},
}));

function ScrollTop(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
	});

	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector(
			"#back-to-top-anchor"
		);

		if (anchor) {
			anchor.scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
		}
	};

	return (
		<Zoom in={trigger}>
			<Box
				onClick={handleClick}
				role='presentation'
				sx={{ position: "fixed", bottom: 30, right: 20 }}
			>
				{children}
			</Box>
		</Zoom>
	);
}

export default function BackToTop(props) {
	const classes = useStyles();
	return (
		<React.Fragment>
			<ScrollTop {...props}>
				<Fab
					color='secondary'
					aria-label='scroll back to top'
					className={classes.scrollTopButton}
				>
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</React.Fragment>
	);
}
