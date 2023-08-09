/// IMPORTS
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import loginValidation from "./LoginValidation";
// STYLES
import styles from "./Login.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import avatar from "../../assets/icons/avatar.png"
import email from "../../assets/icons/sobre.png"
import password from "../../assets/icons/candado.png"

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
    const handlerOnSubmit = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        event.preventDefault();
        // ACA DESPACHA LOS DATOS DEL ESTADO USERLOGIN
    };

    return (
        <div className={styles.all}>
            <div className={styles.avatarCont}>
                <img 
                src={avatar} 
                alt="avatar"
                className={styles.avatar}
                />
            </div>
            <Form className={styles.form}>
                <Form.Group className={styles.input1}>
                    <div>
                        <img src={email} alt="email" />
                    </div>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    />
                </Form.Group>
                <Form.Group className={styles.input}>
                    <div>
                        <img src={password} alt="password" />    
                    </div>
                    <Form.Control 
                    type="password" 
                    placeholder="Password"
                    />
                </Form.Group>
                <label className={styles.label}>
                    We'll never share your password with anyone else.
                </label>
                <Form.Group className={styles.checks}>
                    <Form.Check 
                    type="checkbox" 
                    label="Check me out" 
                    />
                    <NavLink 
                    to="https://www.bbc.com/mundo/noticias/2015/05/150501_vert_fut_cinco_consejos_tonto_finde_ac"
                    target="_blank"
                    className={styles.forgot}
                    >
                        Forgot Password?
                    </NavLink>
                </Form.Group>
                <Button 
                variant="primary" 
                type="submit"
                className={styles.submit}
                >
                    Submit
                </Button>
                <NavLink 
                to="/chooseSignUp">
                    <Button 
                    className={styles.signUp}
                    >
                        Sign Up
                    </Button>
                </NavLink>
            </Form>
        </div>
    );
};

export default Login;
