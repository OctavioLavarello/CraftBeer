const postUserValidation = (
    name: string,
    lastName: string,
    document: Number, 
    email: string,
    password: string,
    address: string,
    image: string,
    country: string, 
    city: string,
    ): string | null => {
    
    if (!name) return "Name is required";
    // Expresión regular que permite letras (mayúsculas y minúsculas), espacios y apóstrofes.
    const nameRegex = /^[a-zA-Z\s']+$/;
    if (!nameRegex.test(name)) {
        return "Invalid name format. Only letters, spaces, and apostrophes are allowed.";
    }
    
    if (!lastName) return "lastName is required";
    // Expresión regular que permite letras, guiones y apóstrofes.
    const lastNameRegex = /^[A-Za-z\-']+$/;
    if (!lastNameRegex.test(lastName)) {
        return "lastName must contain only letters" ;
    }
    
    if (typeof document === "undefined") return "document is required";
    //Expresion regular que permite solo numeros.
    if (typeof document !== "number") {
        return "Document must be a number";
      }

    if (!email) return "email is required";
    // Expresión regular para validar direcciones de correo electrónico.
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        return "Invalid email format.";
    }

    if (!password) return "password is required";
    //Expresion regular que permite al menos un dígito, una letra minúscula , una letra mayúscula, y tener  una longitud de al menos 8 caracteres.
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        return "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one digit.";
    }
    
    if (!address) return "address is required";
    const addressRegex =  /^[a-zA-Z0-9\s\-,']+$/; 
    // Expresión regular que permite letras, números, espacios, comas y guiones.
    if (!addressRegex.test(address)) {
        return "Invalid address format." ;
    }
    
    if (!country) return "Country is required"; 
    // Expresión regular que permite letras, espacios, guiones y apóstrofes.
    const countryRegex = /^[a-zA-Z\s\-']+$/;
    if (!countryRegex.test(country)) {
        return "Invalid country name format.";
    }
    
    if (!city) return "City is required"; 
    // Expresión regular que permite letras, espacios, guiones y apóstrofes.
    const cityRegex = /^[a-zA-Z\s\-']+$/;
    if (!cityRegex.test(city)) {
        return "Invalid city name format.";
    }

    return null 

};

export default postUserValidation;