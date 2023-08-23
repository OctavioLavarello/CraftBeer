const postCompanyValidation = (
  name: string,
  lastName: string,
  document: number,
  email: string,
  password: string,
  phone: number,
  country: string,
  state: string,
  city: string,
  company: string,
  address: string,
  image: string,
  email_verified?: boolean
): string | null => {
  if (!name) return "Name is required.";
  const nameRegex = /^[a-zA-Z\s']+$/;
  if (!nameRegex.test(name)) {
    return "Invalid name format. Only letters, spaces, and apostrophes are allowed.";
  }
  if (!lastName) return "lastName is required.";
  const lastNameRegex = /^[A-Za-z0-9\s-]+$/;
  if (!lastNameRegex.test(lastName)) {
    return "It must contain letters (uppercase and lowercase), numbers, spaces, hyphens and a special character.";
  }

  if (!image) return "image is required";
  const validImageURLRegex =
    /^(https?|ftp):[^\s/$.?#].[^\s]*\.(jpg|jpeg|png|gif|bmp|webp|svg|tiff|ico|jfif|pjpeg|pjp|avif|apng)$|^.+$/;
  if (!validImageURLRegex.test(image)) {
    return "Invalid image URL";
  }

  if (!email) return "Email is required.";
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format.";
  }

  if (email_verified) {
    null
  } else {

    if (!company) return "Company name is required.";
  const companyRegex = /^[A-Za-z0-9]{1,30}$/;
  if (!companyRegex.test(company)) {
    return "It must contain letters (upper and lower case), numbers and a maximum length of 30 characters.";
  }

  if (!address) return "Address is required";
  const addressRegex = /^[A-Za-z0-9\s\.,#\-']+$/;
  if (!addressRegex.test(address)) {
    return "Please enter a valid address";
  }

  if (!country) return "Country is required";
  const countryRegex = /^[A-Za-z\s\-]+$/;
  if (!countryRegex.test(country)) {
    return "Country invalid";
  }

  if (!state) return "State is required";
  const stateRegex = /^[A-Za-z\s\-]+$/;
  if (!stateRegex.test(state)) {
    return "State invalid";
  }

  if (!city) return "City is required";
  const cityRegex = /^[A-Za-z\s\-]+$/;
  if (!cityRegex.test(city)) {
    return "City invalid";
  }

  if (!document) return "Document is required.";
  if (isNaN(document)) {
    return "Invalid document number. Should be a valid number.";
  }

  if (!phone) return "Phone is required.";
  if (isNaN(phone)) {
    return "Invalid phone number. Should be a valid number.";
  }
  if (!password) return "Password is required.";
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{}[\]:;"'<>,.?\\/]).{8,}$/;
  if (!passwordRegex.test(password)) {
    return "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long";
  }

  return null

  }
  

  return null;
};

export default postCompanyValidation;
