import { company } from "./Company"

const companyPutValidation = (companyData: company, setErrors: React.Dispatch<React.SetStateAction<company>>) => {
    const { name, lastName, email, city, company, address } = companyData
    // REGEX
    const nameRegex = /^[a-zA-ZÁÉÍÓÚáéíóú\s'-]+$/u;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameCompanyRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s\-.,'()&]+$/u;
    const cityRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s.'-]{2,50}$/;
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
    // LAST NAME VALIDATION
    if (!lastName) {
        setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "Enter your lastName",
        }));
    } else if (!nameRegex.test(lastName)){
        setErrors((prevErrors) => ({
            ...prevErrors,
            lastName: "Must be a lastName"
        }))
    } else {
        setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "",
        }));
    };
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
    // CITY VALIDATION
    if (!city) {
        setErrors((prevErrors) => ({
        ...prevErrors,
        city: "Enter your city",
        }));
    } else if (!cityRegex.test(city)){
        setErrors((prevErrors) => ({
            ...prevErrors,
            city: "Must be a city"
        }))
    } else {
        setErrors((prevErrors) => ({
        ...prevErrors,
        city: "",
        }));
    };
    // COMPANY NAME VALIDATION
    if (!company) {
        setErrors((prevErrors) => ({
        ...prevErrors,
        company: "Enter your company",
        }));
    } else if (!nameCompanyRegex.test(company)){
        setErrors((prevErrors) => ({
            ...prevErrors,
            company: "Must be a company"
        }))
    } else {
        setErrors((prevErrors) => ({
        ...prevErrors,
        company: "",
        }));
    };
    // ADDRESS VALIDATION
    if (!address) {
        setErrors((prevErrors) => ({
        ...prevErrors,
        address: "Enter your address",
        }));
    } else {
        setErrors((prevErrors) => ({
        ...prevErrors,
        address: "",
        }));
    };
}
export default companyPutValidation