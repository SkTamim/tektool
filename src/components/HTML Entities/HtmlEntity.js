import React from "react";
import ToolTip from "../ToolTip";

function HtmlEntity(props) {
	const copyHandler = (copyData) => {
		navigator.clipboard.writeText(copyData);
	};

	return (
		<div className='entities'>
			<div className='entities__row'>
				<div
					className='entities__column'
					onClick={() => {
						copyHandler(props.character);
					}}
				>
					<ToolTip className='entities__tooltip cursor-pointer'>
						<p className='entities__character'>{props.character}</p>
					</ToolTip>
				</div>
				<div
					className='entities__column'
					onClick={() => {
						copyHandler(props.name);
					}}
				>
					<ToolTip className='entities__tooltip cursor-pointer'>
						<p>{props.name}</p>
					</ToolTip>
				</div>
				<div
					className='entities__column'
					onClick={() => {
						copyHandler(props.entity);
					}}
				>
					<ToolTip className='entities__tooltip cursor-pointer'>
						<p>{props.entity.toString()}</p>
					</ToolTip>
				</div>
				<div
					className='entities__column'
					onClick={() => {
						copyHandler(props.unicode);
					}}
				>
					<ToolTip className='entities__tooltip cursor-pointer'>
						<p>{props.unicode}</p>
					</ToolTip>
				</div>
				<div
					className='entities__column'
					onClick={() => {
						copyHandler(props.css);
					}}
				>
					<ToolTip className='entities__tooltip cursor-pointer'>
						<p>{props.css}</p>
					</ToolTip>
				</div>
			</div>
		</div>
	);
}

export default HtmlEntity;
