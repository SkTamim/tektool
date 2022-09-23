import React from "react";
import { Grid, Skeleton, Stack } from "@mui/material";

const EntityLoading = () => {
	return (
		<tr>
			<td colSpan={6}>
				<Skeleton
					animation='wave'
					variant='rectangular'
					height={60}
					sx={{
						bgcolor: "#f6eefb",
						margin: "5px 0",
					}}
				/>
			</td>
		</tr>
	);
};

export default EntityLoading;
