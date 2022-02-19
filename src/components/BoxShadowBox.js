import React, { Component } from "react";
import ToolTip from "./ToolTip";

class BoxShadowBox extends Component {
	clickHandler = () => {
		navigator.clipboard.writeText(this.props.shadow);
	};

	render() {
		// Converting data to Style object
		let shadowText = this.props.shadow.split(";")[2].slice(14).trim();
		let styleObj = {
			shadow: { boxShadow: shadowText },
		};

		return (
			<ToolTip className='margin-big'>
				<div
					className='box-shadow'
					onClick={this.clickHandler}
					style={styleObj.shadow}
				>
					<h4 className='box-shadow__text'>Shadow {this.props.number}</h4>
					{/* <p className='box-shadow__copy-text'>{this.state.copyText}</p> */}
				</div>
			</ToolTip>
		);
	}
}

export default BoxShadowBox;
