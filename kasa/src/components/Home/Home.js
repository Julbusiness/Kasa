import React from "react";
import "./Home.css";
import falaise from "../../Assets/falaise-home.png";
import image from "../../Assets/image.png";

export default function Home() {
	return (
			<div className="container">
				<div className="bandeau">
					<img src={falaise} alt="falaise" className="imageBandeau" />
				</div>

				<div className="cards">
					<div className="card">
						<img src={image} alt="" className="image" />
						<p className="card-text">Titre de la location</p>
					</div>
					<div className="card">
						<img src={image} alt="" className="image" />
						<p className="card-text">Titre de la location</p>
					</div>
					<div className="card">
						<img src={image} alt="" className="image" />
						<p className="card-text">Titre de la location</p>
					</div>
					<div className="card">
						<img src={image} alt="" className="image" />
						<p className="card-text">Titre de la location</p>
					</div>
					<div className="card">
						<img src={image} alt="" className="image" />
						<p className="card-text">Titre de la location</p>
					</div>
					<div className="card">
						<img src={image} alt="" className="image" />
						<p className="card-text">Titre de la location</p>
					</div>
				</div>
			</div>
	);
}
