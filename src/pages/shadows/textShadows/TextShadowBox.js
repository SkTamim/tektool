import React, { useState } from "react";
import styled from "@emotion/styled";

const BoxWithStyle = styled.div((props) => {
	return `width:200px;
	 height:200px; 
     font-size:2rem;
	 text-transform: uppercase;
     font-weight:600;
	 background-color:#23202b;
	 position:relative;
	
	  border-radius:5px; 
	  display:flex;
	   align-items:center; 
	   justify-content:center;
	    flex-direction:column;
		cursor:pointer;
		user-select:none;
		border:1px solid #23202b;
		p{
			margin-top:-1rem;
			margin-bottom:1rem;
			font-size:1rem;
			transition:.3s all;
			color:#EF0F4F;
			text-shadow:none;
			font-weight: 400;
			text-transform: none;
		}
		&:hover > p{
			transform:scale(1.1)
		}
		
		 ${props.styles}`;
});

const StyledBy = styled.a`
	font-size: 12px;
	text-shadow: none;
	color: #ef0f4f99;
	font-weight: 400;
	position: absolute;
	right: 10px;
	bottom: 5px;
	text-transform: none;
`;

const TextShadowBox = (props) => {
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
			<span>Shadow</span>
			{props.by && (
				<StyledBy href={props.link} target='_blank'>
					By {props.by}
				</StyledBy>
			)}
		</BoxWithStyle>
	);
};

export default TextShadowBox;
