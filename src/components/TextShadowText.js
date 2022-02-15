import React, { Component } from "react";

class TextShadowText extends Component {
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

		navigator.clipboard.writeText(this.props.styles);

		setTimeout(() => {
			this.setState({
				copyText: "Click to Copy",
			});
		}, 2000);
	};

	render() {
		// Converting data to Style object
		let shadowText = this.props.styles
			.replace(/text-shadow/g, "textShadow")
			.split(";");

		let iCount = shadowText.length - 1;

		let keyArray = [];
		let valueArray = [];
		for (let i = 0; i < iCount; i++) {
			const element = shadowText[i];
			let newStr = element.replace(/\n/g, "").trim().split(":");
			keyArray.push(newStr[0]);
			valueArray.push(newStr[1]);
		}

		var keys = keyArray;
		var values = valueArray;
		var styleObj = {};

		keys.forEach(function (key, i) {
			styleObj[key] = values[i];
		});

		// Checking if there is any bacground styles
		let bgStyleObj = {};
		if (this.props.bgStyle) {
			console.log();

			let bgStyle = this.props.bgStyle.split(";");

			let iCount = bgStyle.length - 1;

			let keyArray = [];
			let valueArray = [];
			for (let i = 0; i < iCount; i++) {
				const element = bgStyle[i];
				let newStr = element.trim().split(":");

				keyArray.push(newStr[0]);
				valueArray.push(newStr[1]);
			}

			var keys = keyArray;
			var values = valueArray;

			keys.forEach(function (key, i) {
				bgStyleObj[key] = values[i];
			});
		}

		return (
			<div
				className='text-shadow d-flex'
				onClick={this.clickHandler}
				style={bgStyleObj}
			>
				<div className='text-shadow__main-text' style={styleObj}>
					{this.props.text}
				</div>
				<p className='text-shadow__copy-text'>{this.state.copyText}</p>
			</div>
		);
	}
}

export default TextShadowText;
