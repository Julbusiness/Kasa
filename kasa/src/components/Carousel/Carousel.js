import React, { useState } from "react";
import "./Carousel.css";
import chevronLeft from "../../Assets/Icones/chevron-gauche.png";
import chevronRight from "../../Assets/Icones/chevron-droit.png";

export const CarouselItem = ({ width, pictures }) => {
	// console.log(pictures);

	return pictures.map((picture) => (
		<div key={picture} className="carousel-item" style={{ width: width }}>
			{<img src={picture} alt="" className="picture" />}
		</div>
	));
};

const Carousel = ({ children, pictures }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const updateIndex = (newIndex) => {
		if (newIndex < 0) {
			newIndex = 0;
		} else if (newIndex >= React.Children.count(pictures)) {
			newIndex = React.Children.count(pictures) - 1;
		}
		setActiveIndex(newIndex);
	};

	// console.log(pictures)

	return (
		<div className="carousel">
			<div
				className="inner"
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
				{React.Children.map(children, (child) => {
					return React.cloneElement(child, { width: "100%" });
				})}
			</div>
			<div className={pictures.length > 1 ? "indicators" : "indicatorsNull"}>
				<button
					className="button-left"
					onClick={() => {
						updateIndex(activeIndex - 1);
					}}
				>
					<img src={chevronLeft} alt="" />
				</button>
				<button
					className="button-right"
					onClick={() => {
						updateIndex(activeIndex + 1);
					}}
				>
					<img src={chevronRight} alt="" />
				</button>
			</div>
			<p className={pictures.length > 1 ? "num" : "numNull"}>
				{activeIndex + 1}/{pictures.length}
			</p>
		</div>
	);
};

export default Carousel;
