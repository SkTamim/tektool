import React, { Component } from "react";

class BackToTop extends Component {
	render() {
		return (
			<div className='backToTop'>
				<a href='#top' className='backToTop__icon'>
					&uarr;
				</a>
			</div>
		);
	}
}

export default BackToTop;
