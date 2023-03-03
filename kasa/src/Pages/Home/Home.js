import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import falaise from "../../Assets/falaise-home.png";

export default function Home() {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch("../../Data/data.json")
			.then((response) => {
				// console.log(response);
				return response.json();
			})
			.then((data) => {
				// console.log(data);
				return setData(data);
			});
	}, []);

	const cards = data.map((data) => (
		<div
			key={data.id}
			className="card"
			onClick={() => navigate(`/logement/${data.id}`)}
		>
			{data && <img src={data.cover} alt="" className="image" />}
			{data && <p className="card-text">{data.title}</p>}
		</div>
	));

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
