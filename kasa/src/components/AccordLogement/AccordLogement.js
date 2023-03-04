import React, { useState, useRef, useEffect } from "react";
import "./AccordLogement.css";
import chevron from "../../Assets/down-chevron.png";

export default function Accord(props) {
	const [toggle, setToggle] = useState(false);
	const [heightEl, setHeightEl] = useState();

	const toggleState = () => {
		setToggle(!toggle);
	};

	const refHeight = useRef();

	useEffect(() => {
		setHeightEl(`${refHeight.current.scrollHeight}px`);
	}, []);

	return (
		<div onClick={toggleState} className="accord-logement">
			<div className="accord-visible-logement">
				<h3>{props.title}</h3>
				<img
					src={chevron}
					alt="chevron"
					className={toggle ? "chevron animated-chevron" : "chevron"}
				/>
			</div>
			<div
				ref={refHeight}
				className={toggle ? "accord-toggle-logement animated-logement" : "accord-toggle-logement"}
				style={{ height: toggle ? "249px" : "0px" }}
			>
				<p aria-hidden={toggle ? "true" : "false"}>{props.content}</p>
			</div>
		</div>
	);
}
