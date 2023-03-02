import React from "react";
import "./Home.css";
import falaise from "../../Assets/falaise-home.png";
import image from "../../Assets/image.png";

export default function Home() {
	return (
			<main className="container">
				<div className="bandeau">
					<img src={falaise} alt="falaise" className="imageBandeau" />
					<p className="bandeau-txt">Chez vous, partout et ailleurs</p>
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
			</main>
	);
}
