
import axios from "axios";
import CardModel from "../CardModel/CardModel";
/* import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducer";
 import { useEffect } from "react";



//Estado global de filtros 
const allProduct = useSelector((state:AppState) => state.beerFilters)

// Configuración de la solicitud GET con parámetros
const configParams = {
    params: allProduct
};

 */

//solicitud al Backend
export const allBeers = () => {
    const endpoint = "http://localhost:3001/products"
    return async function () {
        const response = await axios.get(endpoint, /* configParams */)
        let allBeersData = response.data
        return (allBeersData);
    };
}

const CardShop = () => {

    /// borrar este objeto de prueba 
    let allBeersData = [{
        id: 23,
        image: "string",
        name: "Ipa",
        type: "Sout",
        description: "Estas es una cerveza amarga ",
        degreeOfAlcohol: 20,
        presentation: "string",
        price: 230,
        stock: "number",
        qualification: "number",
        status: "sin stooock",
    },
    {
        id: 23,
        image: "string",
        name: "Ipa",
        type: "Sout",
        description: "Estas es una cerveza amarga ",
        degreeOfAlcohol: 20,
        presentation: "string",
        price: 230,
        stock: "number",
        qualification: "number",
        status: "sin stooock",
    }]

    return (
        <>       
         {allBeersData.map((product) => (
            < CardModel
                name={product.name}
                summary={product.description}
                image={product.image}
                price={product.price}
                status={product.status}
            />
        ))}
        </>
    )
}
export default CardShop










/* 

let allBeersData {
    id:23;
    image:string;
    name:Ipa;
    type:Sout;
    description:Estas es una cerveza amarga ;
    degreeOfAlcohol:20;
    presentation:string;
    price:230;
    stock:number;
    qualification?:number;
    status: true;

}*/