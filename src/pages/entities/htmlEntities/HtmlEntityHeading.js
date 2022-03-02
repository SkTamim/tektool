import React from "react";

const HtmlEntityHeading = () => {
	return (
		<div className='entities__heading'>
			<div className='entities__row'>
				<div className='entities__column'>
					<h5>Character</h5>
				</div>
				<div className='entities__column'>
					<h5>Name</h5>
				</div>
				<div className='entities__column'>
					<h5>Entity</h5>
				</div>
				<div className='entities__column'>
					<h5>Unicode</h5>
				</div>
				<div className='entities__column'>
					<h5>CSS</h5>
				</div>
			</div>
		</div>
	);
};

export default HtmlEntityHeading;
