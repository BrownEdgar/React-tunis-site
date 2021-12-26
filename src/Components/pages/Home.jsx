import React from 'react'
import "../../assets/scss/Home.scss"
import { BiRightArrowAlt } from "react-icons/bi";
export default function Home() {
	return (
		<div className='home'>
			<div className="cube"></div>
			<div className="home_page_img" ></div>
			<div className="home_page_info">
				<h1>I'M steve Milner. <br /> <span>web disigner</span></h1>
				<p>I'm a Tunisian based web designer & front‑end developer focused on
					crafting clean & user‑friendly experiences, I am passionate about
					building excellent software that improves the lives of those
					around me.</p>
					<button>
						<span>	more about me</span>
					<span className='button-icon'><BiRightArrowAlt/></span>
					</button>
			</div>
		</div>
	)
}
