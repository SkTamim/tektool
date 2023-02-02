import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, InputAdornment, TextField } from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";

const useStyles = makeStyles((theme) => ({
	fileUpload: {
		color: "rgba(0, 0, 0, 0.6)",
		"& input": {
			visibility: "hidden",
		},
		"& div": {
			cursor: "pointer",
		},
	},
	notchedOutline: {
		cursor: "pointer",
		borderStyle: "dashed",
	},
	label: {
		position: "absolute",
		top: "50%",
		left: "calc(14px + 1em + 16px)",
		transform: "translateY(-76%)",
		color: "rgba(0, 0, 0, 0.6)",
		cursor: "pointer",
		userSelect: "none",
		pointerEvents: "none",
	},
	success: {
		color: theme.palette.spacial.success,
	},
}));

const CustomFileUpload = (props) => {
	const classes = useStyles();
	const [file, setFile] = useState(null);
	const fileUploadRef = useRef();

	const checkFile = (fileInput) => {
		if (fileInput.files.length <= 0) {
			setFile(null);
		} else {
			setFile(fileInput.files[0]);
			props.getFile(fileInput.files[0]);
		}
	};
	const uploadClickHandler = () => {
		fileUploadRef.current.click();
		checkFile(fileUploadRef.current);
	};
	const fileUploadInputHandler = (e) => {
		checkFile(e.target);
	};

	useEffect(() => {
		if (props.resetValue) {
			fileUploadRef.current.value = "";
			setFile(null);
		}
	}, [props.resetValue]);

	return (
		<Box sx={{ position: "relative" }}>
			<TextField
				type='file'
				className={`${classes.fileUpload} ${props.className}`}
				sx={{ mb: 2 }}
				inputRef={fileUploadRef}
				onClick={uploadClickHandler}
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							{file ? (
								<FileDownloadDoneIcon className={classes.success} />
							) : (
								<CloudUploadIcon />
							)}
						</InputAdornment>
					),
					onChange: fileUploadInputHandler,
					classes: {
						notchedOutline: classes.notchedOutline,
					},
					inputProps: {
						accept: props.accept,
					},
				}}
				id={props.id}
				name={props.name}
				fullWidth={props.fullWidth}
				variant={props.variant}
			/>
			<p className={classes.label}>{file ? file.name : props.label}</p>
		</Box>
	);
};

export default CustomFileUpload;
