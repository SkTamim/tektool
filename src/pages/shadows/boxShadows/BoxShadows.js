import React, { Component } from "react";
import BoxShadowBox from "./BoxShadowBox";
import BoxShadowData from "./boxShadowData/BoxShadowData";

// console.log(BoxShadowData[0].shadow);

class BoxShadows extends Component {
	render() {
		document.title = "Web Tools - Shadows";
		return (
			<>
				<section className='section-box-shadows margin-y-big margin-top-for-nav'>
					<div className='text-center'>
						<h1 className='heading-primary'>Box Shadows</h1>
					</div>
					<div className='box-shadows-container d-flex'>
						{BoxShadowData.map((data, index) => {
							return (
								<BoxShadowBox
									shadow={data.shadow}
									number={data.id}
									key={data.id}
								/>
							);
						})}
					</div>
				</section>
				<hr />
			</>
		);
	}
}

export default BoxShadows;
