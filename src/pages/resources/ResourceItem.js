import {
	Card,
	Box,
	Button,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	IconButton,
	Dialog,
	DialogContent,
	Stack,
} from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import React, { useState } from "react";
import classes from "./ResourceItem.module.css";
import ButtonSecondary from "../../components/UI/button/ButtonSecondary";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const ResourceItem = ({ description, name, thumbnail, url }) => {
	const [open, setOpen] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const expandDescription = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<>
			<Card
				className={`${classes.resourceCard} ${
					isExpanded ? classes.expandedCard : ""
				}`}
			>
				<Box className={classes["image-wrap"]}>
					<CardMedia
						component='img'
						height='200'
						image={thumbnail}
						alt={name}
					/>

					<IconButton
						aria-label='full-screen'
						className={classes.fullScreenBtn}
						onClick={handleClickOpen}
					>
						<FullscreenIcon />
					</IconButton>
				</Box>
				<CardContent>
					<Typography
						gutterBottom
						variant='h5'
						component='a'
						href={url}
						target='_blank'
						className={classes.itemTitle}
					>
						{name}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'
						className={!isExpanded ? classes.description : ""}
					>
						{description}
					</Typography>
					<Stack alignItems='flex-end'>
						<button onClick={expandDescription} className={classes.seemoreBtn}>
							{!isExpanded ? "see more" : "see less"}
							{!isExpanded ? (
								<KeyboardDoubleArrowDownIcon />
							) : (
								<KeyboardDoubleArrowUpIcon />
							)}
						</button>
					</Stack>
				</CardContent>
				<CardActions>
					<ButtonSecondary
						component='a'
						href={url}
						target='_blank'
						sx={{ width: "100%" }}
					>
						visit
					</ButtonSecondary>
				</CardActions>
			</Card>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='resource-image'
				maxWidth='md'
				fullWidth
			>
				<DialogContent sx={{ p: 0 }}>
					<img
						src={thumbnail}
						alt={name}
						className={classes.resourceModalImage}
					/>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default ResourceItem;
