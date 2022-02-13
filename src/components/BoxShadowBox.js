import React, { Component } from "react";

class BoxShadowBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			copyText: "Click to Copy",
		};
	}

	clickHandler = () => {
		this.setState({
			copyText: "Copied!",
		});

		navigator.clipboard.writeText(this.props.shadow);

		setTimeout(() => {
			this.setState({
				copyText: "Click to Copy",
			});
		}, 2000);
	};

	render() {
		let shadowText = this.props.shadow.split(";")[2].slice(14).trim();
		let styleObj = {
			shadow: { boxShadow: shadowText },
		};

		return (
			<div
				className='box-shadow'
				onClick={this.clickHandler}
				style={styleObj.shadow}
			>
				<h4 className='box-shadow__text'>Shadow {this.props.number}</h4>
				<p className='box-shadow__copy-text'>{this.state.copyText}</p>
			</div>
		);
	}
}

export default BoxShadowBox;
