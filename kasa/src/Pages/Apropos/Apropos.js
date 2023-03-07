import React from "react";
import "./Apropos.css";
import montagne from "../../Assets/bandeau-apropos.png";
import Accord from "../../components/Accord/Accord";

export default function Apropos() {
	return (
		<div className="container">
			<div className="bandeau-apropos">
				<img src={montagne} alt="montagne" className="image-bandeau-apropos" />
			</div>
			<div className="accord-container">
				<Accord
					title="Fiabilité"
					content="Les annonces postées sur Kasa garantissent une fiablité totale. Les photos sont conformes aux logements, et toutes les informationssont régulièrement vérifiées par nos équipes."
					classAccord="accord"
					classVisible="accord-visible"
					classToggleOpen="accord-toggle animated"
					classToggleClose="accord-toggle"
					classHeight="auto"
				/>
				<Accord
					title="Respect"
					content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation de voisinage entraînera une exclusion de notre plateforme."
					classAccord="accord"
					classVisible="accord-visible"
					classToggleOpen="accord-toggle animated"
					classToggleClose="accord-toggle"
					classHeight="auto"
				/>
				<Accord
					title="Service"
					content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
					classAccord="accord"
					classVisible="accord-visible"
					classToggleOpen="accord-toggle animated"
					classToggleClose="accord-toggle"
					classHeight="auto"
				/>
				<Accord
					title="Sécurité"
					content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
					classAccord="accord"
					classVisible="accord-visible"
					classToggleOpen="accord-toggle animated"
					classToggleClose="accord-toggle"
					classHeight="auto"
				/>
			</div>
		</div>
	);
}
