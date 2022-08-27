import React from "react";
import styled from "@emotion/styled";

import toast from "react-hot-toast";

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
		 ${props.styles}`;
});

const StyledBy = styled.a`
	font-size: 12px;
	text-shadow: none;
	color: #f7ff00db;
	font-weight: 400;
	position: absolute;
	right: 10px;
	bottom: 5px;
	text-transform: none;
`;
const notify = () => {
	toast.success("Shadow Copied Successfully");
};
const TextShadowBox = (props) => {
	let copyClickHandler = () => {
		let shadowCss = props.styles;
		shadowCss = shadowCss.replace(/&/g, ".yourClassName");
		navigator.clipboard.writeText(shadowCss);
		notify();
	};

	return (
		<>
			<BoxWithStyle styles={props.styles} onClick={copyClickHandler}>
				<span>Shadow</span>
				{props.by && (
					<StyledBy href={props.link} target='_blank'>
						By {props.by}
					</StyledBy>
				)}
			</BoxWithStyle>
		</>
	);
};

export default TextShadowBox;
