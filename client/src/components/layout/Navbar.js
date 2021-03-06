import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
	return (
		<div>
			<nav className='navbar bg-dark'>
				<h1>
					<Link to='/'>
						<i className='fas fa-code'></i> DevConnector
					</Link>
				</h1>
				<ul>
					<li>
						<Link to='!#'>Developers</Link>
					</li>
					<li>
						<Link to='/Register'>Sign Up</Link>
					</li>
					<li>
						<Link to='/Login'>Login</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default navbar;
