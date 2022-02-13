import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<nav className='navbar d-flex'>
				<div className='navbar__logo-box'>
					<a href='#' className='navbar__logo'>
						<span>Web</span>
						<span>Tools</span>
					</a>
				</div>
				<ul className='navbar__list d-flex'>
					<li className='navbar__item'>
						<a href='#' className='navbar__link'>
							Home
						</a>
					</li>
					<li className='navbar__item'>
						<a href='#' className='navbar__link active'>
							Shadows
						</a>
					</li>
					<li className='navbar__item'>
						<a href='#' className='navbar__link'>
							Other
						</a>
					</li>
					<li className='navbar__item'>
						<a href='#' className='navbar__link'>
							Other
						</a>
					</li>
					<li className='navbar__item'>
						<a href='#' className='navbar__link'>
							Other
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Header;
