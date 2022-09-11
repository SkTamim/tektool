import React, { useEffect, useState } from "react";
import { Button, CircularProgress, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InfoIcon from "@mui/icons-material/Info";
import HeadingSecondary from "../../../components/UI/typography/HeadingSecondary";
import Paragraph from "../../../components/UI/typography/Paragraph";
import SearchBar from "../../../components/searchBar/SearchBar";
import EntityLoading from "../EntityLoading";
import EntityRowHeading from "./EntityRowHeading";
import EntityRow from "./EntityRow";
import CopiedTost from "../../../components/tosts/CopiedTost";

import useFetchFromFirebase from "../../../hooks/useFetchFromFirebase";
import { limit } from "firebase/firestore";
import ButtonSecondary from "../../../components/UI/button/ButtonSecondary";

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

const Symbols = (props) => {
	// const [data, setData] = useState([]);
	const [open, setOpen] = useState(false);

	// const getData = () => {
	// 	const ref = collection(database, "entities/html-entities/symbols");
	// 	getDocs(ref)
	// 		.then((response) => {
	// 			let items = [];
	// 			response.docs.map((item) => {
	// 				let myData = item.data();
	// 				let finalData = { ...myData, id: item.id };
	// 				items.push(finalData);
	// 			});
	// 			setData(items);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

	// useEffect(() => {
	// 	getData();
	// }, []);
	// console.log(data);

	const getSearchValue = (value) => {
		console.log(value);
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
		lastData,
	} = useFetchFromFirebase("entities/html-entities/symbols");

	useEffect(() => {
		getData([limit(15)]);
	}, []);

	useEffect(() => {
		// window.addEventListener("scroll", handleScroll);
		// return () => {
		// 	window.removeEventListener("scroll", handleScroll);
		// };
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
				// loadMoreData();
			}
		}
	};

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
					<SearchBar searchValue={getSearchValue} />
				</Grid>
			</Grid>

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

			{error && <p className={classes.error}>{error}</p>}
			{data && (
				<div className={classes.tableContainer}>
					<table className={classes.list}>
						<thead>
							<EntityRowHeading />
						</thead>
						<tbody>
							{data.map((element, index) => {
								return <EntityRow data={element} key={element.name + index} />;
							})}
						</tbody>
					</table>
				</div>
			)}
			<CopiedTost open={open} setOpen={setOpen} />

			<div style={{ textAlign: "center", marginTop: "20px" }}>
				{!nextDataLoading && (
					<ButtonSecondary onClick={loadMoreData}>Load More</ButtonSecondary>
				)}
				{nextDataLoading && <CircularProgress m='3' />}
				{hasMoreData && <p>No More Entity Codes Available...</p>}
			</div>
		</div>
	);
};

export default Symbols;
