import React from "react";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";


const AutoCompleteSearchBar = (props) => {

	return (
		<Autocomplete
			sx={{ flexGrow: { xs: 1, sm: 0 }, textAlign: 'center' }}
			options={props.searchList}
			groupBy={(option) => option.category}
			getOptionLabel={(option) => option.title}
			loading={props.searchList.length < 1}

			renderOption={(props, option) => {
				let id = option.title.replace(/ /g, '-').toLowerCase();
				return <a {...props}
					href={`#${id}`} style={{ textDecoration: 'none', textTransform: 'capitalize', color: '#342C49' }}>{option.title}</a>
			}}

			renderInput={(params) => (
				<TextField
					sx={{
						width: { lg: "700px", md: "600px", sm: "100%" },
					}}
					{...params}
					label="Search Resource"
					InputProps={{
						...params.InputProps,
						endAdornment: (
							<React.Fragment>
								{props.searchList.length < 1 ? <CircularProgress color="inherit" size={20} /> : null}
								{params.InputProps.endAdornment}
							</React.Fragment>
						),
					}}
				/>
			)}

		/>

	);
};

export default AutoCompleteSearchBar;
