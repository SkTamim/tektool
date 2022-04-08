import React, { useState } from "react";
import styles from "./ToolTip.module.css";

const ToolTip = (props) => {
	const [title, setTitle] = useState("Click to Copy");

	const clickHandler = () => {
		setTitle("Copied!");

		setTimeout(() => {
			setTitle("Click to Copy");
		}, 2000);
	};

	let classes = `${styles.tooltip} ${props.className}`;
	return (
		<>
			<div
				className={classes}
				data-tooltip-content={title}
				onClick={clickHandler}
			>
				{props.children || "Tool-Tip"}
			</div>
		</>
	);
};

export default ToolTip;
