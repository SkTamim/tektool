import { Box } from "@mui/system";
import React from "react";

import ComingSoon from "../../helper/ComingSoon";

const Learn = () => {
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
