import { login } from "./Login"

const loginValidation = (userLogin: login, setErrors: React.Dispatch<React.SetStateAction<login>>) => {
    const { email, password } = userLogin
    // EMAIL VALIDATION
    if (!email) {
        setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Enter your email",
        }));
    } else {
        setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
        }));
    };
    // PASSWORD VALIDATION
    if (!password) {
        setErrors((prevErrors) => ({
            ...prevErrors,
            password: "Enter your password",
        }));
    } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            password: "",
        }));
    }
}

export default loginValidation