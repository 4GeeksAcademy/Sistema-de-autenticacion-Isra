import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const HomePrivado = () => {

    const navigate = useNavigate();
    
    useEffect(() => {
        if (!sessionStorage.getItem("token")) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="text-center">
            <h1>Home Privado</h1>

            <p className="my-5"><img src="https://m.media-amazon.com/images/I/51CQOuwQYjL._AC_UF894,1000_QL80_.jpg"></img></p>

            <p className="mt-5">Aquí solo puedes acceder si tienes token registrado en el session storage</p>            
        </div>
    );
};