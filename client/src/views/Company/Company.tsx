/// IMPORTS
import React, { useState } from "react"
import companyPutValidation from "./CompanyPutValidation";
// STYLES
import styles from "./Company.module.css"
import Form from 'react-bootstrap/Form';

// COMPANY DETAIL
export interface company {
    name: string;
    lastName: string;
    email: string;
    document: number;
    phone: number;
    country: string;
    state: string;
    city: string;
    address: string;
    company: string;
};
const Company: React.FC = () => {
    // LOCAL STORAGE
    const hasNavigatedLocalStorage: any = localStorage.getItem("user")
    const { user } = JSON.parse(hasNavigatedLocalStorage)
    // LOCAL STATE
    const [companyData, setCompanyData] = useState<company>({
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        document: user.document,
        phone: user.phone,
        country: user.country,
        state: user.state,
        city: user.city,
        company: user.company,
        address: user.address
    });
    const [errors, setErrors] = useState<company>({
        name: "",
        lastName: "",
        email: "",
        document: 0,
        phone: 0,
        country: "",
        city: "",
        state: "",
        company: "",
        address: ""
    });
    // HANDLERS
    const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCompanyData((prevCompanyData) => ({
            ...prevCompanyData,
            [name]: value
        }));
        companyPutValidation(companyData, setErrors);
    };
    const handlerOnSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
    };
    return (
        <div className={styles.all}>
            <Form 
            className={styles.form}
            onSubmit={handlerOnSubmit}
            >
                <Form.Group>
                    <Form.Control 
                    required
                    type="text"
                    name="name"
                    value={companyData.name}
                    placeholder="change your name?"
                    onChange={handlerOnChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                    required
                    type="text"
                    name="lastName"
                    value={companyData.lastName}
                    placeholder="change your last name?"
                    onChange={handlerOnChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                    required
                    type="email" 
                    name="email"
                    value={companyData.email}
                    placeholder="change your email?"
                    onChange={handlerOnChange} 
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                    required
                    type="number"
                    name="document"
                    value={companyData.document}
                    placeholder="change your document?"
                    onChange={handlerOnChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                    required
                    type="number"
                    name="phone"
                    value={companyData.phone}
                    placeholder="change your phone number?"
                    onChange={handlerOnChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                    required
                    type="text"
                    name="city"
                    value={companyData.country}
                    placeholder="Password"
                    onChange={handlerOnChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                    required
                    type="text"
                    name="password"
                    value={companyData.state}
                    placeholder="Password"
                    onChange={handlerOnChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                    required
                    type="text"
                    name="password"
                    value={companyData.city}
                    placeholder="Password"
                    onChange={handlerOnChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                    required
                    type="text"
                    name="password"
                    value={companyData.company}
                    placeholder="Password"
                    onChange={handlerOnChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                    required
                    type="text"
                    name="password"
                    value={companyData.address}
                    placeholder="Password"
                    onChange={handlerOnChange}
                    />
                </Form.Group>
                <button 
                type="submit"
                className={styles.submit}
                >
                    Save changes
                </button>
            </Form>
        </div>
    );
}

export default Company