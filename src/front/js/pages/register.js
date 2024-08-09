import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Register = () => {
    const { store, actions } = useContext(Context); 
    const[register, setRegister] = useState({
        email: "",
        password: ""
    });
    const inputValue= (e) => {
        const {name, value} = e.target;
        setRegister({...register, [name]: value});
    }
    const submitForm = (e) => {
        e.preventDefault();
        actions.register(register.email, register.password);
        console.log(register);
        setRegister({
            email: "",
            password: ""
        });
    }

    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={(event)=>submitForm(event)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    onChange={inputValue} 
                    name="email" 
                    value={register.email}/>
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input type="password" 
                    className="form-control" 
                    id="exampleInputPassword1"
                    onChange={inputValue}
                    name="password"
                    value={register.password}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Register
                </button>
            </form>
        </div>
    );
}