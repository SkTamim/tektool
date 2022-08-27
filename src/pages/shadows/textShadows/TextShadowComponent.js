import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, CircularProgress } from "@mui/material";
import { limit } from "firebase/firestore";
import useFetchFromFirebase from "../../../hooks/useFetchFromFirebase";

import { database } from "../../../firebase/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";

import Paragraph from "../../../components/UI/typography/Paragraph";
import LoadingScreen from "../LoadingScreen";
import TextShadowBox from "./TextShadowBox";
import InfoIcon from "@mui/icons-material/Info";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "1rem 0",
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
	copyInfo: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#f0f8ff",
		padding: ".5rem",
		flexWrap: "wrap",
		textAlign: "center",
	},
}));

const TextShadowComponent = () => {
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
	} = useFetchFromFirebase("shadows/text-shadows/first");

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
		<div className={classes.root}>
			<div className={classes.copyInfo}>
				<InfoIcon />
				<Paragraph sx={{ px: 1 }}>
					Click on any box to copy the Shadow
				</Paragraph>
			</div>
			<Grid container gap={8} justifyContent='center' py={2}>
				{loading && <LoadingScreen />}
				{data &&
					data.map((data) => (
						<Grid item key={data.id}>
							<TextShadowBox
								styles={data.styles}
								by={data.by}
								link={data.link}
							/>
						</Grid>
					))}
				{error && (
					<Paragraph className={classes.errorMessage}>{error}</Paragraph>
				)}
			</Grid>

			<div style={{ textAlign: "center", marginTop: "20px" }}>
				{nextDataLoading && <CircularProgress sx={{ mt: 3 }} />}
				{hasMoreData && <p>No More Text Shadows Available...</p>}
			</div>
		</div>
	);
};

export default TextShadowComponent;
