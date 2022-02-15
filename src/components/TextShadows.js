import React, { Component } from "react";
import TextShadowText from "./TextShadowText";
import TextShadowData from "./TextShadowData";

// console.log(TextShadowData[0].styles);
class TextShadows extends Component {
	render() {
		return (
			<section className='section-text-shadows margin-y-big margin-top-for-nav'>
				<div className='text-center'>
					<h1 className='heading-primary'>Text Shadows</h1>
				</div>
				<div className='text-shadows-container d-flex'>
					{TextShadowData.map((data) => {
						return (
							<TextShadowText
								styles={data.styles}
								text={data.text}
								key={data.id}
								bgStyle={data.bgStyle}
							/>
						);
					})}
				</div>
			</section>
		);
	}
}

export default TextShadows;
