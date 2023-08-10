/// IMPORTS
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import loginValidation from "./LoginValidation";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { AppState } from "../../redux/reducer";
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
    const { localStorageCart } = useSelector((state: AppState) => state) 
    const dispatch = useDispatch();
    // LOCAL STATES
    const [userLogin, setUserLogin] = useState<login>({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<login>({
        email: "",
        password: "",
    });
    // HANDLERS
    const navigate = useNavigate();

    const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserLogin((prevUserLogin) => ({
            ...prevUserLogin,
            [name]: value
        }));
        loginValidation(userLogin, setErrors);
    };
    const handlerNavigate = () => {
        if (Object.keys(localStorageCart).length === 0){
            navigate("/shop")
        } else {
            navigate("/cart")
        }
    }
    const handlerOnSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        try {
            await dispatch(login(userLogin));
            handlerNavigate();
        } catch (error: any) { 
            if (error.response && error.response.data && error.response.data.message) {
                const errorMessage = error.response.data.message;
                toast.error(errorMessage);
            } else {
            toast.error("An error occurred while logging in.");
            }
        }
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
