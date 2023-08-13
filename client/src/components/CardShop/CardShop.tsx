import { useEffect, useState } from "react";
import axios from "axios";
import CardModel from "../CardModel/CardModel";
import { useDispatch, useSelector } from "react-redux";
import { AppState, BeerFilters } from "../../redux/reducer";
import { Toaster, toast } from "react-hot-toast";
import style from "./CardShop.module.css"
import { totalPages } from "../../redux/actions/actions";

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
interface responseBack {
    products: BeerData[],
    totalPages: number
}

const CardShop = () => {
    //estados 
    const dispatch = useDispatch()
    const [dataLoaded, setDataLoaded] = useState(false);
    
    // Variable para controlar la carga de datos
    let [allBeersData, setAllBeersData] = useState<BeerData[]>([]);



    // traemos el estado de filtros 
    const filters: BeerFilters = useSelector((state: AppState) => state.beerFilters)

    // solicitud a back concatenando el los filtros en la url 
    const getAllBeers = async () => {
        const endpoint = "/product";
        try {
            const response = await axios.get<responseBack>(endpoint, { params: filters });
            setAllBeersData(response.data.products);
            
            dispatch(totalPages(response.data.totalPages))
        } catch (error) {
            console.error(error);
        }
    };

    //allama al backend cada vez que se modifica filters
    useEffect(() => {
        getAllBeers();
    }, [filters]);

    // Marcar que los datos se han cargado cuando allBeersData tiene elementos
    useEffect(() => {
        if (allBeersData.length > 0) {
            setDataLoaded(true);
        }
    }, [allBeersData]);

    // Mostrar el toast solo si los datos se han cargado
    useEffect(() => {
        if (dataLoaded && allBeersData.length === 0) {
            toast.error("Upps parece que no hay cervezas. Intenta buscar otra...");
        }
    }, [allBeersData, dataLoaded]);


    let messageAlert = (
        <div className={style.message}>
            <h2>❌ ❌ ❌</h2>
            <h1> Upps!!! no hay cervezas disponibles. </h1>
            <h5>Prueba con filtros distintos</h5>
        </div>)



    return (
        <>
            <div>
                <Toaster toastOptions={{ className: style["customToast"], duration: 700 }} />
            </div>
            {dataLoaded && allBeersData.length === 0 && messageAlert}

            {allBeersData?.map((product) => (
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
        </>
    );
};

export default CardShop;


