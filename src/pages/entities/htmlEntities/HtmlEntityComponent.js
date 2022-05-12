import { makeStyles } from "@mui/styles";
import React from "react";
import EntityRow from "./EntityRow";
import EntityRowHeading from "./EntityRowHeading";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "2rem 0",
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
	list: {
		width: "100%",
		borderCollapse: "collapse",
		"& tr:nth-child(2n)": {
			backgroundColor: "#edfdff",
		},
	},
}));

const HtmlEntityComponent = (props) => {
	const { data, error, loading, entityType, id } = props;
	const type = entityType.toLowerCase();
	const mainData = data[type];
	console.log(data);
	const classes = useStyles();

	return (
		<div className={classes.root} id={id}>
			<h2 className={classes.subHeading}>{entityType}</h2>
			{loading && <p>Loading</p>}
			{error && <p>{error}</p>}
			{mainData && (
				<table className={classes.list}>
					<thead>
						<EntityRowHeading />
					</thead>
					<tbody>
						{mainData.map((element, index) => {
							return <EntityRow data={element} key={element.name + index} />;
						})}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default HtmlEntityComponent;
