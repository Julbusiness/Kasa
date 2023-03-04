import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Logement.css";
import imageLogement from "../../Assets/photo-logement-desktop.png";
import Accord from "../../components/AccordLogement/AccordLogement";
// import Carousel from "../../components/Carousel/Carousel";

export default function Logement() {
	const [logements, setLogements] = useState([]);
	const currentId = useParams();

	useEffect(() => {
		fetch("../../Data/data.json")
			.then((response) => {
				// console.log(response);
				return response.json();
			})
			.then((logements) => {
				// console.log(data);
				return setLogements(logements);
			});
	}, []);

	/* ---------------------------------- test ---------------------------------- */

	console.log(currentId);
	console.log(logements);

	//! il faut mettre en place une conditions qui dit:
	//! si l'un des logement du tableau logements inclus mon current id alors je dois montrer ce logement et ses propriétes pour les afficher.

	const element = logements.filter((logement) => logement.id === currentId.id);

	if (element) {
		console.log(element[0]);
	}

	return (
		<div className="container">
			<div className="bloc-carousel">
				{/* <Carousel /> */}
				<img src={imageLogement} alt="" />
			</div>
			<div className="bloc-profil">
				<div className="bloc-text">
					<h1>Cozy loft on the Canal Saint-Martin</h1>
					<p>Paris, Île-de-France</p>
				</div>
				<div className="profil">
					<p>Alexandre Dumas</p>
					<div className="avatar">
						<img src="" alt="" />
					</div>
				</div>
			</div>
			<div className="bloc-tag">
				<div className="tags">
					<div className="tag">Cozy</div>
					<div className="tag">Canal</div>
					<div className="tag">Paris 10</div>
				</div>
				<div className="rating">*****</div>
			</div>
			<div className="bloc-accordeon">
				<Accord
					title="Description"
					content="Texte dynamique à venir"
					className="accord-logement"
				/>
				<Accord 
					title="Equipements"
					content="Texte dynamique à venir"
					className="accord-logement"
				/>
			</div>
		</div>
	);
}
