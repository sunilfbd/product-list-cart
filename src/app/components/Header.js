import React from "react";
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
	render() {
		return (
			<div className="Header">
				<div className="logoWrapper">
					<NavLink exact to='/'>
						<img className="logo" src="/images/logo.png" alt="AKQA Logo"/>
					</NavLink>
				</div>

				<ul className="navlist">
					<li className="navlist-item">
						<NavLink exact to='/cart' activeClassName="active" className="navlist-item-link icn-basket">
							<span className="itemCounter">{this.props.cartVal}</span>
						</NavLink>
					</li>
				</ul>
			</div>
		);
	}
};