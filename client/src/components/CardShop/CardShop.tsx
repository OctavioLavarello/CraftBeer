import { useEffect, useState } from "react";
import axios from "axios";
import CardModel from "../CardModel/CardModel";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducer";

interface BeerData {
    id: string;
    image: string;
    name: string;
    IBU: number;
    type: string;
    description: string;
    degreeOfAlcohol: number;
    presentation: string;
    price: number;
    stock: number;
    qualification?: number;
}

const CardShop = () => {
    let [allBeersData, setAllBeersData] = useState<BeerData[][]>([]);
    // traemos el estado de filtros 
    const filters = useSelector((state: AppState) => state.beerFilters)
    // solicitud a back concatenando el los filtros en la url 
    const getAllBeers = async () => {
        const endpoint = "http://localhost:3001/product";
        try {
            const response = await axios.get<BeerData[]>(endpoint, { params: filters });
            const allBeersDataPage: BeerData[][] = [];
            // Fracionamos en 3 articulos por pagina 
            for (let i = 0; i < response.data.length; i += 3) {
                const array = response.data.slice(i, i + 3);
                allBeersDataPage.push(array);
            }
            setAllBeersData(allBeersDataPage);
        } catch (error) {
            console.error(error);
        }
    };
    console.log(allBeersData);

    useEffect(() => {
        getAllBeers();
    }, [filters]);

    return (
        <>
            {allBeersData.map((pageData, pageIndex) => (
                <div key={pageIndex}>
                    {pageData.map((product) => (
                        <CardModel
                            key={product.id}
                            id={product.id}
                            type={product.type}
                            IBU={product.IBU}
                            name={product.name}
                            degreeOfAlcohol={product.degreeOfAlcohol}
                            summary={product.description}
                            image={product.image}
                            price={product.price}
                            stock={product.stock}
                        />
                    ))}
                </div>
            ))}
        </>
    );
};

export default CardShop;
