import { Box } from "@mui/system";
import React from "react";

const Numbering = (props) => {
	return (
		<Box
			sx={{
				color: (theme) => theme.palette.darkBg.text,
				backgroundColor: (theme) => theme.palette.darkBg.bg,
				width: "3rem",
				height: "3rem",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				borderRadius: "50%",
				...props.sx,
			}}
		>
			#{props.number}
		</Box>
	);
};

export default Numbering;
