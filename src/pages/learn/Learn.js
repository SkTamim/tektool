import { Box } from "@mui/system";
import React, { useEffect } from "react";

import ComingSoon from "../../helper/ComingSoon";

const Learn = () => {
	useEffect(() => {
		document.title = "TekTool - Learning Portal"
	}, [])

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "78.5vh",
			}}
		>
			<ComingSoon />
		</Box>
	);
};

export default Learn;
