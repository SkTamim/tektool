import React, { useEffect, useRef, useState } from "react";
import { limit } from "firebase/firestore";
import useFetchFromFirebase from "../../../hooks/useFetchFromFirebase";

import { makeStyles } from "@mui/styles";
import { Button, CircularProgress, Grid } from "@mui/material";
import ShadowBox from "./ShadowBox";
import Paragraph from "../../../components/UI/typography/Paragraph";
import LoadingScreen from "../LoadingScreen";

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: "2rem",
	},
	subHeading: {
		fontSize: "1.5rem",
		fontWeight: "500",
		textTransform: "uppercase",
		textDecoration: "underline",
		color: theme.palette.accent.black,
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.2rem",
		},
	},
	errorMessage: {
		color: theme.palette.spacial.error,
	},
}));

const LightBoxShadows = (props) => {
	const classes = useStyles();

	const {
		data,
		loading,
		error,
		getData,
		nextDataLoading,
		setNextDataLoading,
		hasMoreData,
		getNextData,
		lastData,
	} = useFetchFromFirebase("shadows/box-shadows/light");

	useEffect(() => {
		getData([limit(15)]);
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastData]);

	const handleScroll = (e) => {
		let scrollTrigger =
			window.innerHeight + e.target.documentElement.scrollTop + 1;
		let scrollHeightTrigger = e.target.documentElement.scrollHeight - 400;

		if (scrollTrigger >= scrollHeightTrigger) {
			if (!loading) {
				window.removeEventListener("scroll", handleScroll);
				loadMoreData();
			}
		}
	};

	const loadMoreData = () => {
		getNextData([limit(10)]);
		setNextDataLoading(true);
	};

	return (
		<div className={classes.root} id={props.shadowId}>
			<h4 className={classes.subHeading}>{props.shadowType} Shadows</h4>

			<Grid container gap={8} justifyContent='center' py={4}>
				{loading && <LoadingScreen />}
				{data &&
					data.map((data) => (
						<Grid item key={data.id}>
							<ShadowBox styles={data.shadow} by={data.by} link={data.link} />
						</Grid>
					))}
				{error && (
					<Paragraph className={classes.errorMessage}>{error}</Paragraph>
				)}
			</Grid>
			<div style={{ textAlign: "center" }}>
				{nextDataLoading && <CircularProgress />}
				{hasMoreData && <p>No More Box Shadows Available...</p>}
			</div>
		</div>
	);
};

export default LightBoxShadows;
