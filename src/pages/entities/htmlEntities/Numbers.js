import React, { useEffect, useState } from "react";
import { CircularProgress, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InfoIcon from "@mui/icons-material/Info";
import HeadingSecondary from "../../../components/UI/typography/HeadingSecondary";
import Paragraph from "../../../components/UI/typography/Paragraph";
import SearchBar from "../../../components/searchBar/SearchBar";
import EntityLoading from "../EntityLoading";
import EntityRowHeading from "./EntityRowHeading";
import EntityRow from "./EntityRow";
import ButtonSecondary from "../../../components/UI/button/ButtonSecondary";

import useFetchFromFirebase from "../../../hooks/useFetchFromFirebase";
import useSearchFirebase from "../../../hooks/useSearchFirebase";
import { limit } from "firebase/firestore";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "1rem 0",
	},
	list: {
		width: "100%",
		borderCollapse: "collapse",
	},
	error: {
		textAlign: "center",
		color: theme.palette.spacial.error,
	},
	copyInfo: {
		display: "flex",
		flexWrap: "wrap",
		width: "max-content",
		borderRadius: "3px",
		color: "#29b6f6",
		margin: "0",
	},
	tableContainer: {
		overflowX: "scroll",
		paddingBottom: "20px",

		"&::-webkit-scrollbar": {
			height: "10px",
		},

		"&::-webkit-scrollbar-thumb": {
			backgroundColor: "rgb(169 169 169 / 60%) !important",
			backgroundImage: "none",
			borderRadius: "20px",
		},

		"&::-webkit-scrollbar-track": {
			boxShadow: "none !important",
			backgroundColor: "transperent !important",
		},
	},
}));

const Numbers = (props) => {
	const [isSharched, setIsSharched] = useState(false);

	const { searchData, searchLoading, searchError, getSearchData } =
		useSearchFirebase("entities/html-entities/numbers", "numbers");

	const getSearchValue = (value) => {
		getSearchData(value.toLowerCase());
		setIsSharched(true);
	};

	const getSerachLetter = (letter) => {
		if (letter.length === 0) {
			setIsSharched(false);
		}
	};

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
	} = useFetchFromFirebase("entities/html-entities/numbers");

	useEffect(() => {
		getData([limit(15)]);
	}, []);

	const loadMoreData = () => {
		getNextData([limit(10)]);
		setNextDataLoading(true);
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={2} px='14px' pb='20px'>
				<Grid item md={6} xs={12}>
					<HeadingSecondary
						sx={{ fontSize: "25px", padding: "0 !important", ml: "5px" }}
					>
						{props.entityType} Entity
					</HeadingSecondary>
					<div className={classes.copyInfo}>
						<InfoIcon />
						<Paragraph
							sx={{
								px: 1,
								color: "inherit !important",
								m: "0 !important",
								fontSize: { xs: "14px", sm: "1rem" },
							}}
						>
							Click on any symbol or Code to copy
						</Paragraph>
					</div>
				</Grid>
				<Grid item md={6} xs={12}>
					<SearchBar
						searchValue={getSearchValue}
						serachLetter={getSerachLetter}
					/>
				</Grid>
			</Grid>

			{error && !isSharched && <p className={classes.error}>{error}</p>}

			{!error && !isSharched && (
				<div className={classes.tableContainer}>
					<table className={classes.list}>
						<thead>
							<EntityRowHeading />
						</thead>
						<tbody>
							{loading && (
								<>
									<EntityLoading />
									<EntityLoading />
									<EntityLoading />
									<EntityLoading />
									<EntityLoading />
									<EntityLoading />
									<EntityLoading />
									<EntityLoading />
								</>
							)}
							{data &&
								data.map((element, index) => {
									return (
										<EntityRow data={element} key={element.name + index} />
									);
								})}
						</tbody>
					</table>

					<div style={{ textAlign: "center", marginTop: "20px" }}>
						{!nextDataLoading && (
							<ButtonSecondary onClick={loadMoreData}>
								Load More
							</ButtonSecondary>
						)}
						{nextDataLoading && <CircularProgress m='3' />}
						{hasMoreData && <p>No More Entity Codes Available...</p>}
					</div>
				</div>
			)}

			{searchError && isSharched && (
				<p className={classes.error}>{searchError}</p>
			)}
			{!searchError && isSharched && (
				<div className={classes.tableContainer}>
					<table className={classes.list}>
						<thead>
							<EntityRowHeading />
						</thead>
						<tbody>
							{searchLoading && (
								<>
									<EntityLoading />
									<EntityLoading />
									<EntityLoading />
									<EntityLoading />
									<EntityLoading />
									<EntityLoading />
									<EntityLoading />
									<EntityLoading />
								</>
							)}
							{searchData &&
								searchData.map((element, index) => {
									return (
										<EntityRow data={element} key={element.name + index} />
									);
								})}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default Numbers;
