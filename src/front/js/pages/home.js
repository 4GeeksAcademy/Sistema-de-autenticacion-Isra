import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Register and Login Project</h1>
			<p className="mt-5">
				<img src={'https://cdn-icons-png.flaticon.com/512/1000/1000946.png'} />	
			</p>
		</div>
	);
};
