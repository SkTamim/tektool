import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import EntityLoading from "../EntityLoading";
import EntityRow from "./EntityRow";
import EntityRowHeading from "./EntityRowHeading";
import InfoIcon from "@mui/icons-material/Info";
import Paragraph from "../../../components/UI/typography/Paragraph";
import CopiedTost from "../../../components/tosts/CopiedTost";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "2rem 0",
	},
	subHeading: {
		fontSize: "1.5rem",
		fontWeight: "500",
		textTransform: "uppercase",
		textDecoration: "underline",
		margin: "0 3rem",
		color: theme.palette.accent.black,
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.2rem",
			margin: "0 1rem",
		},
	},
	list: {
		width: "100%",
		borderCollapse: "collapse",
		"& tr:nth-child(2n)": {
			backgroundColor: "#edfdff",
		},
	},
	error: {
		textAlign: "center",
		color: theme.palette.spacial.error,
	},
	copyInfo: {
		display: "flex",
		alignItems: "center",
		padding: ".2rem .5rem",
		flexWrap: "wrap",
		width: "max-content",
		borderRadius: "3px",
		color: "#29b6f6",
		margin: "0 2.5rem",
		[theme.breakpoints.down("sm")]: {
			margin: "0",
		},
	},
}));

const HtmlEntityComponent = (props) => {
	const [open, setOpen] = useState(false);
	const classes = useStyles();
	const { data, error, loading, entityType, id } = props;
	let mainData = null;

	if (data) {
		const type = entityType.toLowerCase();
		mainData = data[type];
	}

	const copyTostHandler = (isOpen) => {
		setOpen(isOpen);
	};

	return (
		<div className={classes.root} id={id}>
			<h2 className={classes.subHeading}>{entityType}</h2>

			<div className={classes.copyInfo}>
				<InfoIcon />
				<Paragraph sx={{ px: 1, color: "inherit !important" }}>
					Click on any symbol or Code to copy
				</Paragraph>
			</div>
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
