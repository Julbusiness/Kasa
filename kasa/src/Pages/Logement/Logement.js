import React from "react";
import { useParams } from "react-router-dom";
import "./Logement.css";
import Accord from "../../components/Accord/Accord";
import Carousel, { CarouselItem } from "../../components/Carousel/Carousel";
import Rating from "../../components/Rating/Rating";
import Tags from "../../components/Tags/Tags";

export default function Logement({ data }) {
	const currentId = useParams();

	// console.log(currentId);
	// console.log(data);

	const element = data.filter((dataElement) => dataElement.id === currentId.id);
	let elementAPI;

	if (element) {
		// console.log(element[0]);
		elementAPI = element[0];
	}

	// console.log(elementAPI);

	return (
		elementAPI && (
			<div className="container">
				<div className="bloc-carousel">
					<Carousel pictures={elementAPI.pictures}>
						<CarouselItem pictures={elementAPI.pictures} />
					</Carousel>
				</div>
				<div className="bloc-center">
					<div className="bloc-title-tag">
						<div className="bloc-text">
							<h1>{elementAPI.title}</h1>
							<p>{elementAPI.location}</p>
						</div>
						<div className="tags">
							<Tags tags={elementAPI.tags} />
						</div>
					</div>
					<div className="bloc-profil-rating">
						<div className="profil">
							<p>{elementAPI.host.name}</p>
							<div className="avatar">
								<img src={elementAPI.host.picture} alt="" />
							</div>
						</div>
						<div className="rating">
							<Rating rating={parseInt(elementAPI.rating)} />
						</div>
					</div>
				</div>
				<div className="bloc-accordeon">
					<Accord
						title="Description"
						content={elementAPI.description}
						classAccord="accord-logement"
						classVisible="accord-visible-logement"
						classToggleOpen="accord-toggle-logement animated-logement height-open"
						classToggleClose="accord-toggle-logement height-close"
					/>
					<Accord
						title="Equipements"
						content={elementAPI.equipments.map((equipment) => (
							<li key={equipment} className="equipment-list">
								{equipment}
							</li>
						))}
						classAccord="accord-logement"
						classVisible="accord-visible-logement"
						classToggleOpen="accord-toggle-logement animated-logement height-open"
						classToggleClose="accord-toggle-logement height-close"
					/>
				</div>
			</div>
		)
	);
}
