import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import styled from "@emotion/styled";

const BoxWithStyle = styled.div((props) => {
	return `width:200px;
	 height:200px; 
	 background-color:#FCF7FF;
	  border-radius:5px; 
	  display:flex;
	   align-items:center; 
	   justify-content:center;
	    flex-direction:column;
		cursor:pointer;
		user-select:none;
		transition:.3s all;
		position:relative;
		p{
			transition:.3s all;
			color:#342C49;
		}
		&:hover > p{
			transform:scale(1.1)
		}
		
		 ${props.styles}`;
});

const useStyles = makeStyles({
	link: {
		fontSize: "12px",
		position: "absolute",
		bottom: "5px",
		right: "10px",
		color: "#777",
	},
	by: {
		fontSize: "12px",
		transform: "scale(1) !important",
		position: "absolute",
		bottom: "5px",
		right: "10px",
		color: "#777 !important",
	},
});

const ShadowBox = (props) => {
	const classes = useStyles();
	const [copyText, setCopyText] = useState(false);

	let copyClickHandler = () => {
		setCopyText(true);

		let shadowCss = props.styles;
		shadowCss = shadowCss.replace(/&/g, ".yourClassName");
		navigator.clipboard.writeText(shadowCss);
	};

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setCopyText(false);
		}, 2000);

		return () => {
			clearTimeout(timeOut);
		};
	});

	return (
		<BoxWithStyle styles={props.styles} onClick={copyClickHandler}>
			<p>{copyText ? "Copied!" : "Click to Copy!"}</p>
			{(props.link ? (
				<a href={props.link} className={classes.link} target='_blank'>
					By {props.by}
				</a>
			) : null) ||
				(props.by ? <p className={classes.by}>By {props.by}</p> : null)}
		</BoxWithStyle>
	);
};

export default ShadowBox;
