import React, { useState, useRef } from "react";
import { Alert, Autocomplete, Snackbar, Stack, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ButtonSecondary from "../UI/button/ButtonSecondary";

const AutoCompleteSearchBar = (props) => {
	const [open, setOpen] = useState(false);

	const handleSearch = (event) => {
		event.preventDefault();
		const value = searchValueRef.current.value;
		console.log(value);
		if (value.trim().length === 0) {
			setOpen(true);
			setTimeout(() => {
				setOpen(false);
			}, 1000);
		} else {
			// props.searchValue(value);
		}
	};
	const searchValueRef = useRef();

	const handleChange = (e) => {
		// props.serachLetter(e.target.value);
		console.log(e.target.value);
	};

	return (
		<>
			<Stack
				direction='row'
				component='form'
				onSubmit={handleSearch}
				justifyContent='center'
				sx={{ width: { xs: "100%" } }}
			>
				<Autocomplete
					sx={{ flexGrow: { xs: 1, sm: 0 } }}
					freeSolo
					disableClearable
					options={props.searchList.map((option) => option)}
					renderInput={(params) => (
						<TextField
							sx={{
								width: { lg: "600px", md: "500px", sm: "400px", xs: "100%" },
							}}
							{...params}
							placeholder='Search any Resource'
							InputProps={{
								...params.InputProps,
								type: "search",
								onChange: handleChange,
							}}
							inputRef={searchValueRef}
						/>
					)}
				/>
				<ButtonSecondary type='submit' sx={{ px: "20px" }}>
					<SearchIcon sx={{ width: { sm: "35px" }, height: { sm: "auto" } }} />
				</ButtonSecondary>
			</Stack>
			<Snackbar open={open} autoHideDuration={2000}>
				<Alert severity='error' sx={{ width: "maxContent" }}>
					Pleas enter valid input
				</Alert>
			</Snackbar>
		</>
	);
};

export default AutoCompleteSearchBar;
