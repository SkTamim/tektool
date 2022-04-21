import React, { useEffect, useState } from "react";
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
		p{
			transition:.3s all;
			color:#342C49;
		}
		&:hover > p{
			transform:scale(1.1)
		}
		
		 ${props.styles}`;
});

const ShadowBox = (props) => {
	const [copyText, setCopyText] = useState("Click to Copy!");

	let copyClickHandler = () => {
		setCopyText("Copied!");

		let shadowCss = props.styles;
		shadowCss = shadowCss.replace(/&/g, ".yourClassName");
		navigator.clipboard.writeText(shadowCss);

		setTimeout(() => {
			setCopyText("Click to Copy!");
		}, 1000);
	};

	return (
		<BoxWithStyle styles={props.styles} onClick={copyClickHandler}>
			<p>{copyText}</p>
		</BoxWithStyle>
	);
};

export default ShadowBox;
