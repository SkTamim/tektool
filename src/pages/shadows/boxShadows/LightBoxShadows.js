import React, { useEffect } from "react";
import { limit } from "firebase/firestore";
import useFetchFromFirebase from "../../../hooks/useFetchFromFirebase";

import { makeStyles } from "@mui/styles";
import { Button, Grid } from "@mui/material";
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
	} = useFetchFromFirebase("shadows/box-shadows/light");

	useEffect(() => {
		getData([limit(15)]);
	}, []);

	const loadMoreData = () => {
		getNextData([limit(5)]);
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
				{!nextDataLoading && !hasMoreData && (
					<Button onClick={loadMoreData}>Load more</Button>
				)}
				{nextDataLoading && <p>Loading more data...</p>}
				{hasMoreData && <p>No more data...</p>}
			</div>
		</div>
	);
};

export default LightBoxShadows;
