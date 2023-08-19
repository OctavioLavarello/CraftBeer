/// IMPORTS
import { AnyAction, Dispatch } from "redux";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import loginValidation from "./LoginValidation";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
// ACTION
import { login } from "../../redux/actions/actions";
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
    // GLOBAL STATE
    const dispatch = useDispatch<Dispatch<AnyAction> | any>();
    // LOCAL STATES
    const [userLogin, setUserLogin] = useState<login>({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<login>({
        email: "",
        password: "",
    });
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
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
        try {
            await setIsClicked(!isClicked);
            await dispatch(login(userLogin));
        } catch (error: any) { 
            if (error.response && error.response.data && error.response.data.message) {
                const errorMessage = error.response.data.message;
                toast.error(errorMessage);
                setIsError(!isError)
            } else {
            toast.error("An error occurred while logging in.");
            }
        }
    };
    const handlerCheck= () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className={styles.all}>
            <div className={!isError ? (!isClicked ? styles.avatarCont : styles.avatarContSubmit) : styles.avatarContError}>
                <img 
                src={avatar} 
                alt="avatar"
                className={styles.avatar}
                />
            </div>
            <Form 
            className={!isError ? (!isClicked ? styles.form : styles.formSubmit) : styles.formError}
            onSubmit={handlerOnSubmit}
            >
                <Form.Group className={`${errors.email ? styles.inputError1 : styles.input1}`}>
                    <div>
                        <img src={email} alt="email" />
                    </div>
                    <Form.Control 
                    required
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
                    required
                    type={showPassword ? 'text' : 'password'}
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
                    onChange={handlerCheck}
                    />
                    <NavLink 
                    to="/home"
                    className={styles.forgot}
                    >
                        Forgot Password?
                    </NavLink>
                </Form.Group>
                <button 
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
                </button>
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
