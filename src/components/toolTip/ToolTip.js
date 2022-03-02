import React, { useState } from "react";

function ToolTip(props) {
	const [title, setTitle] = useState("Click to Copy");

	const clickHandler = () => {
		setTitle("Copied!");

		setTimeout(() => {
			setTitle("Click to Copy");
		}, 2000);
	};

	let classes = "tooltip";
	if (props.className) {
		classes = "tooltip" + " " + props.className;
	}
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
}

export default ToolTip;
