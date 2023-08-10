import { message } from "./Contact"

const contactValidation = (userMessage: message, setErrors: React.Dispatch<React.SetStateAction<message>>) => {
    const { name, email, phone } = userMessage
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
}

export default contactValidation