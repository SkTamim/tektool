import React from "react";
import { Grid, Skeleton, Stack } from "@mui/material";

const MySkeleton = () => {
	return (
		<Grid item>
			<Skeleton
				component={Grid}
				item
				animation='wave'
				variant='rectangular'
				width={200}
				height={200}
				sx={{ bgcolor: "#f6eefb" }}
			/>
		</Grid>
	);
};

const LoadingScreen = () => {
	return (
		<Grid container gap={8} justifyContent='center' py={4} component={Stack}>
			<MySkeleton />
			<MySkeleton />
			<MySkeleton />
			<MySkeleton />
			<MySkeleton />
			<MySkeleton />
			<MySkeleton />
			<MySkeleton />
			<MySkeleton />
			<MySkeleton />
			<MySkeleton />
			<MySkeleton />
		</Grid>
	);
};

export default LoadingScreen;
