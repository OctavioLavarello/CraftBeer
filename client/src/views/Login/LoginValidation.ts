import { login } from "./Login"

const loginValidation = (userLogin: login, setErrors: React.Dispatch<React.SetStateAction<login>>) => {
    const { email, password } = userLogin
    // REGEX
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // const uppercaseRegex = /[A-Z]/;
    // const numberRegex = /[0-9]/;
    // EMAIL VALIDATION
    if (!email) {
        setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Enter your email",
        }));
    } else if (email.length <= 6 ){
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Must be at least 6 characters"
        }))
    } else if (!emailRegex.test(email)){
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Must be an email"
        }))
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
    // } else if (!uppercaseRegex.test(password)){
    //     setErrors((prevErrors) => ({
    //         ...prevErrors,
    //         password: "Must have at least one capital letter"
    //     }))
    // } else if (!numberRegex.test(password)){
    //     setErrors((prevErrors) => ({
    //         ...prevErrors,
    //         password: "Must have at least one number"
    //     }))
    } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            password: "",
        }));
    }
}

export default loginValidation