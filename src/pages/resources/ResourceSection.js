import { CircularProgress, Grid } from "@mui/material";
import React, { useEffect } from "react";
import ResourceItem from "./ResourceItem";
import ResourceLoading from "./ResourceLoading";

import useFetchFromFirebase from "../../hooks/useFetchFromFirebase";
import { limit, orderBy } from "firebase/firestore";
import HeadingSecondary from "../../components/UI/typography/HeadingSecondary";

import CollectionsIcon from "@mui/icons-material/Collections";
import Paragraph from "../../components/UI/typography/Paragraph";
import ButtonSecondary from "../../components/UI/button/ButtonSecondary";

const ResourceSection = () => {
	const {
		data,
		loading,
		error,
		getData,
		nextDataLoading,
		setNextDataLoading,
		hasMoreData,
		getNextData,
	} = useFetchFromFirebase("resources/media/images-videos");

	useEffect(() => {
		getData([limit(8), orderBy("id", "asc")]);
	}, []);

	const loadMoreData = () => {
		getNextData([limit(4), orderBy("id", "asc")]);
		setNextDataLoading(true);
	};

	return (
		<Grid
			container
			spacing={2}
			my={4}
			component='section'
			justifyContent='center'
		>
			<Grid item xs={12} mb={2}>
				<HeadingSecondary className='resource-heading'>
					<CollectionsIcon sx={{ color: "#008DA3", mr: 1 }} />
					Free stock Images and Videos
				</HeadingSecondary>
			</Grid>

			{loading && <ResourceLoading />}
			{data &&
				data.map((item) => (
					<Grid item md={4} lg={3} sm={6} xs={12} key={item.id}>
						<ResourceItem
							description={item.description}
							name={item.name}
							thumbnail={item.thumbnail}
							url={item.url}
						/>
					</Grid>
				))}
			{error && <Paragraph className='errorMessage'>{error}</Paragraph>}

			<Grid item xs={12} mt={2} textAlign='center'>
				{!nextDataLoading && !hasMoreData && (
					<ButtonSecondary onClick={loadMoreData}>Load More</ButtonSecondary>
				)}
				{nextDataLoading && <CircularProgress m='3' />}
				{hasMoreData && <p>No More Resource Available...</p>}
			</Grid>
		</Grid>
	);
};

export default ResourceSection;
