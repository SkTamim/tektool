import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<nav className='navbar d-flex'>
				<div className='navbar__logo-box'>
					<NavLink to='/home' className='navbar__logo'>
						<span>Web</span>
						<span>Tools</span>
					</NavLink>
				</div>
				<ul className='navbar__list d-flex'>
					<li className='navbar__item'>
						<NavLink to='/home' className='navbar__link'>
							Home
						</NavLink>
					</li>
					<li className='navbar__item'>
						<NavLink to='/' className='navbar__link'>
							Box Shadows
						</NavLink>
					</li>
					<li className='navbar__item'>
						<NavLink to='/text-shadows' className='navbar__link'>
							Text Shadows
						</NavLink>
					</li>
					<li className='navbar__item'>
						<NavLink to='/coming-soon' className='navbar__link'>
							Other
						</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Header;
