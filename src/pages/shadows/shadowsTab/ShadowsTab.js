import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BoxShadows from "../boxShadows/BoxShadows";
import TextShadows from "../textShadows/TextShadows";

const useStyles = makeStyles((theme) => ({
	tabBox: {
		backgroundColor: theme.palette.secondary.text,
		color: theme.palette.secondary.dark,
		width: "300px",
		marginLeft: "auto",
		borderRadius: "50px",
		[theme.breakpoints.down("sm")]: {
			margin: "0 auto",
			width: "250px",
			"& button": {
				fontSize: "12px",
			},
		},
	},
	tabs: {
		borderRadius: "50px",
		"& .MuiTabs-indicator": {
			backgroundColor: theme.palette.secondary.dark,
		},
	},
	tab: {
		minWidth: "50%",
		color: theme.palette.secondary.dark,
		borderBottom: `1px solid ${theme.palette.secondary.light}`,

		"&.Mui-selected": {
			backgroundColor: "#A8F4FF",
		},
	},
	tabOne: {
		borderRight: `1px solid ${theme.palette.secondary.light}`,
	},
}));

const ShadowsTab = () => {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box>
			<Box className={classes.tabBox}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='Tab'
					className={classes.tabs}
				>
					<Tab
						label='Box Shadows'
						className={`${classes.tab} ${classes.tabOne}`}
					/>

					<Tab label='Text Shadows' className={classes.tab} />
				</Tabs>
			</Box>

			<TabPanel value={value} index={0}>
				<BoxShadows />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<TextShadows />
			</TabPanel>
		</Box>
	);
};

const TabPanel = (props) => {
	const { children, value, index } = props;

	return (
		<div role='tabpanel' hidden={value !== index}>
			{value === index && children}
		</div>
	);
};
export default ShadowsTab;
