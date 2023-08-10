import { message } from "./Contact"

const contactValidation = (userMessage: message, setErrors: React.Dispatch<React.SetStateAction<message>>) => {
    const { name, email, phone } = userMessage
    // REGEX
    const nameRegex = /^[a-zA-Z\s'-]+$/
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const phoneNumber = /^[0-9\s+]+$/
    // NAME VALIDATION
    if (!name) {
        setErrors((prevErrors) => ({
            ...prevErrors,
            name: "Enter your name",
        }));
    } else if (!nameRegex.test(name)){
        setErrors((prevErrors) => ({
            ...prevErrors,
            name: "Must be a name"
        }))
    } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            name: "",
        }));
    };
    // EMAIL VALIDATION
    if (!email) {
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Enter your email",
        }));
    } else if (!emailRegex.test(email)){
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Must contain an email address"
        }))
    } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: "",
        }));
    };
    // PHONE NUMBER VALIDATION
    if (!phone) {
        setErrors((prevErrors) => ({
            ...prevErrors,
            phone: "Enter your phone number",
        }));
    } else if (!phoneNumber.test(phone)){
        setErrors((prevErrors) => ({
            ...prevErrors,
            phone: "Must contain a phone number"
        }))
    } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            phone: "",
        }));
    };
}

export default contactValidation