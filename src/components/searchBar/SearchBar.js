import React, { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ButtonSecondary from "../UI/button/ButtonSecondary";
import { makeStyles } from "@mui/styles";
import { Alert, Snackbar, Stack, TextField } from "@mui/material";

const useStyles = makeStyles({
	root: {
		padding: ".5rem 0",
		display: "flex",
	},
	input: {
		padding: ".5rem",
		outline: "none",
		border: "1px solid",
		borderRadius: "2px",
		fontSize: "inherit",
		width: "100%",
		"&:focus,&:active": {
			borderColor: "#008DA3",
		},
	},
});

const SearchBar = (props) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleSearch = (event) => {
		event.preventDefault();
		const value = searchValueRef.current.value;
		if (value.trim().length === 0) {
			setOpen(true);
			setTimeout(() => {
				setOpen(false);
			}, 1000);
		} else {
			props.searchValue(value);
		}
	};
	const searchValueRef = useRef();
	return (
		<>
			<form className={classes.root} onSubmit={handleSearch}>
				<input
					placeholder='Search here'
					autoComplete='off'
					type='search'
					name='search'
					id='search'
					ref={searchValueRef}
					className={classes.input}
				/>
				<ButtonSecondary type='submit'>
					<SearchIcon />
				</ButtonSecondary>
			</form>
			<Stack spacing={2} sx={{ width: "100%" }}>
				<Snackbar open={open} autoHideDuration={2000}>
					<Alert severity='error' sx={{ width: "maxContent" }}>
						Pleas enter valid input
					</Alert>
				</Snackbar>
			</Stack>
		</>
	);
};

export default SearchBar;
