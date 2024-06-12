import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../assets/Bloc.png"
const Navbar = () => {
	return (
		<nav className="flex text-white items-center justify-between py-8">
			<div>
				<img src={Logo}  alt="BlocSoc Logo" className="w-60"/>
			</div>

			<div className="w-1/4 lg:w-1/2">
				<ul className="flex justify-between text-xl">
					<Link to="/">Team</Link>
					<Link to="/">Blogs</Link>
					<Link to="/">Events</Link>
					<Link to="/">Register</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;