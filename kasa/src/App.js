import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Pages/Home/Home";
import Logement from "./Pages/Logement/Logement";
import Apropos from "./Pages/Apropos/Apropos";
import NotFound from "./Pages/404/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {

	const [data, setData] = useState([]);

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


	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home data={data}/>} />
				<Route path="/logement/:id" element={<Logement data={data}/>} />
				<Route path="/apropos" element={<Apropos />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
