/// IMPORTS
import React, { useState } from "react"
import loginValidation from "./LoginValidation"
// STYLES
import styles from "./Login.module.css"

// LOGIN
const Login: React.FC = () => {
    // LOCAL STATES
    const [userLogin, setUserLogin] = useState<Object>({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<Object>({
        name: "",
        email: "",
        password: "",
        message: "",
    });

    // HANDLERS
    const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // const { name, value } = event.target;
        // setUserLogin((userLogin) => ({
        //     ...userLogin,
        //     [name]: value
        // }));
        // loginValidation(userLogin, setErrors);
    };
    const handlerOnSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        // ACA DESPACHA LOS DATOS DEL ESTADO USERLOGIN
    };

    return (
        <div>
            <form 
            // onSubmit={handlerOnSubmit}
            >
                <div>
                    <label htmlFor="email"></label>
                    <input 
                    type="text" 
                    name="email" 
                    placeholder="insert your email" 
                    // value={userLogin.email} 
                    onChange={handlerOnChange}/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input 
                    type="text" 
                    name="password" 
                    placeholder="insert your password" 
                    // value={userLogin.password} 
                    onChange={handlerOnChange}/>
                </div>
            </form>
        </div>
    )
}

export default Login