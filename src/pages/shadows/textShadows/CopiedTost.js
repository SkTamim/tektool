import React from "react";
import { Stack, Snackbar, Alert } from "@mui/material";

const CopiedTost = (props) => {
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		props.setOpen(false);
	};

	return (
		<Stack spacing={2} sx={{ width: "100%" }}>
			<Snackbar open={props.open} autoHideDuration={2000} onClose={handleClose}>
				<Alert
					onClose={handleClose}
					severity='success'
					sx={{ width: "200px", border: "1px solid #60c664" }}
				>
					Copied
				</Alert>
			</Snackbar>
		</Stack>
	);
};
export default CopiedTost;
