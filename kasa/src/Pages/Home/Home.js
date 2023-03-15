import React from "react";
import "./Home.css";
import falaise from "../../Assets/falaise-home.png";
import { useNavigate } from "react-router-dom";

export default function Home({data}) {
	const navigate = useNavigate();

	const cards = data.map(
		(data) =>
			data && (
				<div
					key={data.id}
					className="card"
					onClick={() => navigate(`/logement/${data.id}`)}
				>
					{<img src={data.cover} alt="" className="image" />}
					{<div className="gradient"></div>}
					{<p className="card-text">{data.title}</p>}
				</div>
			)
	);

	return (
		<main className="container">
			<div className="bandeau">
				<img src={falaise} alt="falaise" className="imageBandeau" />
				<p className="bandeau-txt">Chez vous, partout et ailleurs</p>
			</div>
			<div className="cards">{cards}</div>
		</main>
	);
}
