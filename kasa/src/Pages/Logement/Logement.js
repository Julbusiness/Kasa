import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Logement.css";

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

	return (
		<div className="container">
			<div className="caroussel">

			</div>
		</div>
	);
}
