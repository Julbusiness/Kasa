import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Logement.css";
import imageLogement from "../../Assets/photo-logement-desktop.png";
import Accord from "../../components/AccordLogement/AccordLogement";
import Carousel, {CarouselItem} from "../../components/Carousel/Carousel";
import Rating from "../../components/Rating/Rating";

export default function Logement() {
	const [logements, setLogements] = useState([]);
	const currentId = useParams();

	useEffect(() => {
		fetch("../../Utils/Data/data.json")
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

	//! Rendre dynamique mes elements (voir trello)

	const element = logements.filter((logement) => logement.id === currentId.id);

	console.log(element);

	const elementAPI = [] 

	if (element) {
		console.log(element[0]);
		elementAPI.push(element[0])
	}
	
	console.log(elementAPI);

	//!
	return (
		<div className="container">
			<div className="bloc-carousel">
				<Carousel>
					<CarouselItem>
						<img src={imageLogement} alt="" />
					</CarouselItem>
					<CarouselItem>
						<img src={imageLogement} alt="" />
					</CarouselItem>
					<CarouselItem>
						<img src={imageLogement} alt="" />
					</CarouselItem>
				</Carousel>
			</div>
			<div className="bloc-profil">
				<div className="bloc-text">
					{/* <h1>{elementAPI[0].title}</h1> */}
					{/* <p>{elementAPI[0].location}</p> */}
				</div>
				<div className="profil">
					{/* <p>{elementAPI[0].host.name}</p> */}
					<div className="avatar">
						{/* <img src={elementAPI[0].host.picture} alt="" /> */}
					</div>
				</div>
			</div>
			<div className="bloc-tag">
				<div className="tags">
					<div className="tag">Cozy</div>
					<div className="tag">Canal</div>
					<div className="tag">Paris 10</div>
				</div>
				<div className="rating">
					<Rating />
				</div>
			</div>
			<div className="bloc-accordeon">
				<Accord
					title="Description"
					// content={elementAPI[0].description}
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
