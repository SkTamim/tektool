import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import EntityLoading from "../EntityLoading";
import EntityRow from "./EntityRow";
import EntityRowHeading from "./EntityRowHeading";
import InfoIcon from "@mui/icons-material/Info";
import Paragraph from "../../../components/UI/typography/Paragraph";
import CopiedTost from "../../../components/tosts/CopiedTost";
import HeadingSecondary from "../../../components/UI/typography/HeadingSecondary";
import { Grid } from "@mui/material";
import SearchBar from "../../../components/searchBar/SearchBar";

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
}));

const HtmlEntityComponent = (props) => {
	const [open, setOpen] = useState(false);
	const classes = useStyles();
	const { data, error, loading, entityType, id } = props;
	let mainData = null;

	const getSearchValue = (value) => {
		console.log(value);
	};

	if (data) {
		const type = entityType.toLowerCase();
		mainData = data[type];
	}

	const copyTostHandler = (isOpen) => {
		setOpen(isOpen);
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={2} px='14px' pb='20px'>
				<Grid item md={6} xs={12}>
					<HeadingSecondary
						sx={{ fontSize: "25px", padding: "0 !important", ml: "5px" }}
					>
						{entityType} Entity
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
			{mainData && (
				<div style={{ overflowX: "scroll" }}>
					<table className={classes.list}>
						<thead>
							<EntityRowHeading />
						</thead>
						<tbody>
							{mainData.map((element, index) => {
								return (
									<EntityRow
										copyTostHandler={copyTostHandler}
										data={element}
										key={element.name + index}
									/>
								);
							})}
						</tbody>
					</table>
				</div>
			)}
			<CopiedTost open={open} setOpen={setOpen} />
		</div>
	);
};

export default HtmlEntityComponent;
