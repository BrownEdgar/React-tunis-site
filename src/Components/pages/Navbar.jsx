import React from 'react'
import "../../assets/scss/Navbar.scss"
import { NavLink } from 'react-router-dom'
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { HiOutlineUser, HiMailOpen } from "react-icons/hi";
import { FaBriefcase } from "react-icons/fa";

export default function Navbar() {
	return (
		<header>
			<nav>
				<ul className='icon_menu'>
					<li className='icon_box'>
						<NavLink to="/">
							<i>	<AiFillHome /></i>
							<h2>Home</h2>
						</NavLink>
					</li>
					<li className='icon_box'>
						<NavLink to="/">
							<i>	<HiOutlineUser /></i>
							<h2>About</h2>
						</NavLink>
					</li>
					<li className='icon_box'>
						<NavLink to="/">
							<i>	<FaBriefcase /></i>
							<h2>Portfolio</h2>
						</NavLink>
					</li>
					<li className='icon_box'>
						<NavLink to="/">
							<i>	<HiMailOpen /></i>
							<h2>Contact</h2>
						</NavLink>
					</li>
					<li className='icon_box'>
						<NavLink to="/">
							<i>	<AiFillMessage /></i>
							<h2>Blog</h2>
						</NavLink>
					</li>
				</ul>
			</nav>

		</header>
	)
}
