import React from "react";
import {
	Grid,
	Box,
	Skeleton,
	CardMedia,
	CardContent,
	Card,
} from "@mui/material";

function Media() {
	return (
		<Card>
			<Box>
				<CardMedia
					component={Skeleton}
					sx={{ height: 200 }}
					animation='wave'
					variant='rectangular'
				/>
			</Box>
			<CardContent sx={{ paddingBottom: "5px !important" }}>
				<Skeleton animation='wave' height={40} sx={{ mb: 1 }} />
				<Skeleton animation='wave' height={8} sx={{ marginBottom: "5px" }} />
				<Skeleton animation='wave' height={8} sx={{ marginBottom: "5px" }} />
				<Skeleton
					animation='wave'
					height={8}
					sx={{ width: "80%", marginBottom: 1 }}
				/>
				<Skeleton animation='wave' height={60} width='100%' />
			</CardContent>
		</Card>
	);
}

export default function Facebook() {
	return (
		<>
			<Grid item md={4} lg={3} sm={6} xs={12}>
				<Media />
			</Grid>
			<Grid item md={4} lg={3} sm={6} xs={12}>
				<Media />
			</Grid>
			<Grid item md={4} lg={3} sm={6} xs={12}>
				<Media />
			</Grid>
			<Grid item md={4} lg={3} sm={6} xs={12}>
				<Media />
			</Grid>
		</>
	);
}
