import { company } from "./Company"

const companyPutValidation = (companyData: company, setErrors: React.Dispatch<React.SetStateAction<company>>) => {
    const { name, lastName, email, country, state, city, company, address } = companyData
    // REGEX
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const addressRegex = /^[0-9A-Za-z\s\.,\-']+$/u
    const nameCompanyRegex = /^[A-Za-z0-9\s\-.,'()&]+$/u
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
    // COUNTRY VALIDATION
    if (!country) {
        setErrors((prevErrors) => ({
        ...prevErrors,
        country: "Enter your country",
        }));
    } else if (!nameRegex.test(country)){
        setErrors((prevErrors) => ({
            ...prevErrors,
            country: "Must be a country"
        }))
    } else {
        setErrors((prevErrors) => ({
        ...prevErrors,
        country: "",
        }));
    };
    // STATE VALIDATION
    if (!state) {
        setErrors((prevErrors) => ({
        ...prevErrors,
        state: "Enter your state",
        }));
    } else if (!nameRegex.test(state)){
        setErrors((prevErrors) => ({
            ...prevErrors,
            state: "Must be a state"
        }))
    } else {
        setErrors((prevErrors) => ({
        ...prevErrors,
        state: "",
        }));
    };
    // CITY VALIDATION
    if (!city) {
        setErrors((prevErrors) => ({
        ...prevErrors,
        city: "Enter your city",
        }));
    } else if (!nameRegex.test(city)){
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
    } else if (!addressRegex.test(address)){
        setErrors((prevErrors) => ({
            ...prevErrors,
            address: "Must be a address"
        }))
    } else {
        setErrors((prevErrors) => ({
        ...prevErrors,
        address: "",
        }));
    };
}
export default companyPutValidation