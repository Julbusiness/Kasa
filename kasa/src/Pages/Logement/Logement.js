import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Logement.css";
import Accord from "../../components/Accord/Accord";
import Carousel, { CarouselItem } from "../../components/Carousel/Carousel";
import Rating from "../../components/Rating/Rating";

export default function Logement() {
	const currentId = useParams();
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("../../Data/data.json")
			.then((response) => {
				// console.log(response);
				return response.json();
			})
			.then((data) => {
				// console.log(data);
				setData(data);
			});
	}, []);

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
					<Carousel>
						{elementAPI.pictures.map((picture) => (
							<CarouselItem key={picture}>
								<img src={picture} alt="" className="picture" />
							</CarouselItem>
						))}
					</Carousel>
				</div>
				<div className="bloc-profil">
					<div className="bloc-text">
						<h1>{elementAPI.title}</h1>
						<p>{elementAPI.location}</p>
					</div>
					<div className="profil">
						<p>{elementAPI.host.name}</p>
						<div className="avatar">
							<img src={elementAPI.host.picture} alt="" />
						</div>
					</div>
				</div>
				<div className="bloc-tag">
					<div className="tags">
						{elementAPI.tags.map((tag) => (
							<div key={tag} className="tag">
								{tag}
							</div>
						))}
					</div>
					<div className="rating">
						<Rating rating={parseInt(elementAPI.rating)} />
					</div>
				</div>
				<div className="bloc-accordeon">
					<Accord
						title="Description"
						content={elementAPI.description}
						classAccord="accord-logement"
						classVisible="accord-visible-logement"
						classToggleOpen="accord-toggle-logement animated-logement"
						classToggleClose="accord-toggle-logement"
						classHeight="249px"
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
						classToggleOpen="accord-toggle-logement animated-logement"
						classToggleClose="accord-toggle-logement"
						classHeight="249px"
					/>
				</div>
			</div>
		)
	);
}
