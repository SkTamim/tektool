import React, { useEffect } from "react";
import { limit } from "firebase/firestore";
import useFetchFromFirebase from "../../../hooks/useFetchFromFirebase";

import { makeStyles } from "@mui/styles";
import { CircularProgress, Grid } from "@mui/material";
import ShadowBox from "./ShadowBox";
import Paragraph from "../../../components/UI/typography/Paragraph";
import LoadingScreen from "../LoadingScreen";
import HeadingSecondary from "../../../components/UI/typography/HeadingSecondary";

const useStyles = makeStyles((theme) => ({
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

const ColoredBoxShadows = (props) => {
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
	} = useFetchFromFirebase("shadows/box-shadows/colored");

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

		if (window.innerWidth <= 1039) {
			scrollHeightTrigger = e.target.documentElement.scrollHeight - 600;
		}
		if (window.innerWidth <= 775) {
			scrollHeightTrigger = e.target.documentElement.scrollHeight - 800;
		}
		if (window.innerWidth <= 495) {
			scrollHeightTrigger = e.target.documentElement.scrollHeight - 1000;
		}

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
			<div style={{ textAlign: "center", padding: "1rem 0" }}>
				<HeadingSecondary>{props.shadowType} Box Shadows</HeadingSecondary>
			</div>

			<Grid container gap={8} justifyContent='center' py={2}>
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
			<div style={{ textAlign: "center", marginTop: "30px" }}>
				{nextDataLoading && <CircularProgress sx={{ mt: 3 }} />}
				{hasMoreData && <p>No More Box Shadows Available...</p>}
			</div>
		</div>
	);
};

export default ColoredBoxShadows;
