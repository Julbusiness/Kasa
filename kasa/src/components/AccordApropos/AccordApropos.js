import React, { useState, useRef, useEffect } from "react";
import "./AccordApropos.css";
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
		<div onClick={toggleState} className="accord">
			<div className="accord-visible">
				<h3>{props.title}</h3>
				<img
					src={chevron}
					alt="chevron"
					className={toggle ? "chevron animated-chevron" : "chevron"}
				/>
			</div>
			<div
				ref={refHeight}
				className={toggle ? "accord-toggle animated" : "accord-toggle"}
				style={{ height: toggle ? `${heightEl}` : "0px" }}
			>
				<p aria-hidden={toggle ? "true" : "false"}>{props.content}</p>
			</div>
		</div>
	);
}
