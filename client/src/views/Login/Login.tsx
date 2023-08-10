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

export interface login {
    email: string,
    password: string
}
// LOGIN
const Login: React.FC = () => {
    // LOCAL STATES
    const [userLogin, setUserLogin] = useState<login>({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<login>({
        email: "",
        password: "",
    });
    console.log(userLogin)
    // HANDLERS
    const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserLogin((prevUserLogin) => ({
            ...prevUserLogin,
            [name]: value
        }));
        loginValidation(userLogin, setErrors);
    };
    const handlerOnSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        // despacho de userLogin
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
            <Form 
            className={styles.form}
            onSubmit={handlerOnSubmit}
            >
                <Form.Group className={`${errors.email ? styles.inputError1 : styles.input1}`}>
                    <div>
                        <img src={email} alt="email" />
                    </div>
                    <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="Enter email"
                    onChange={handlerOnChange} 
                    />
                </Form.Group>
                {errors.email && <p className={styles.validationMessage}>{errors.email}</p>}
                <Form.Group className={`${errors.password ? styles.inputError : styles.input}`}>
                    <div>
                        <img src={password} alt="password" />    
                    </div>
                    <Form.Control 
                    type="password" 
                    name="password"
                    placeholder="Password"
                    onChange={handlerOnChange}
                    />
                </Form.Group>
                {errors.password && <p className={styles.validationMessage}>{errors.password}</p>}
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
                disabled={
                    !userLogin.email ||
                    !userLogin.password ||
                    !!errors.email ||
                    !!errors.password
                    }
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
