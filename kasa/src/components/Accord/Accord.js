import React, { useState } from "react";
import "./Accord.css";
import chevron from "../../Assets/Icones/down-chevron.png";

export default function Accord(props) {
	const [toggle, setToggle] = useState(false);

	const toggleState = () => {
		setToggle(!toggle);
	};

	return (
		<div className={props.classAccord}>
			<div onClick={toggleState} className={props.classVisible}>
				<h3>{props.title}</h3>
				<img
					src={chevron}
					alt="chevron"
					className={toggle ? "chevron animated-chevron" : "chevron"}
				/>
			</div>
			<div
				className={toggle ? props.classToggleOpen  : props.classToggleClose}
			>
				<p 
				aria-hidden={toggle ? "true" : "false"}
				className={toggle ? "openToggle" : "closeToggle"}
				>{props.content}</p>
			</div>
		</div>
	);
}
