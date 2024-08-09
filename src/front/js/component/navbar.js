import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	
	const isLogged = sessionStorage.getItem("token");
	const navigate = useNavigate();
	
	if(isLogged){
		return (
			<nav className="navbar navbar-light bg-light">
				<div className="container">
					<Link to="/">
						<span className="navbar-brand mb-0 h1">React Boilerplate</span>
					</Link>
					<div className="ml-auto">
							<button className="btn btn-danger" 
							onClick={()=> {
								sessionStorage.removeItem("token")
								navigate("/login");
							}}>Logout</button>
					</div>
				</div>
			</nav>);
		}else{
			return (
				<nav className="navbar navbar-light bg-light">
					<div className="container">
						<Link to="/">
							<span className="navbar-brand mb-0 h1">React Boilerplate</span>
						</Link>
						<div className="ml-auto">
								<button className="btn btn-primary mx-2" onClick={()=>navigate("/register")} >Register</button>
								<button className="btn btn-success" onClick={()=>navigate("login")}>Login</button>
						</div>
					</div>
				</nav>
			);
		}

};
