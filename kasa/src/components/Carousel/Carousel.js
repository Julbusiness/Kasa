import React, { useState } from "react";
import "./Carousel.css";
import chevronLeft from "../../Assets/Icones/chevron-gauche.png"
import chevronRight from "../../Assets/Icones/chevron-droit.png"

export const CarouselItem = ({ children, width }) => {
	return (
		<div className="carousel-item" style={{ width: width }}>
			{children}
		</div>
	);
};

const Carousel = ({ children }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const updateIndex = (newIndex) => {
		if (newIndex < 0) {
			newIndex = 0;
		} else if (newIndex >= React.Children.count(children)) {
			newIndex = React.Children.count(children) - 1;
		}
		setActiveIndex(newIndex);
	};

	return (
		<div className="carousel">
			<div
				className="inner"
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
				{React.Children.map(children, (child, index) => {
					return React.cloneElement(child, { width: "100%" });
				})}
			</div>
			<div className="indicators">
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
        <p className="num">{activeIndex + 1}/4</p>
		</div>
	);
};

export default Carousel;