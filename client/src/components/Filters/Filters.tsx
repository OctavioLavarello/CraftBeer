
import { useEffect, useState } from "react";
import style from "./Filters.module.css"
import { useDispatch } from "react-redux";
import { orderFilters } from "../../redux/actions/actions";

const Filters = () => {

    const dispatch = useDispatch()
    //Estado local que almacena el input
    const [inputValue, setInputValue] = useState({
    })

    // controlar los input de option 
    const handlerOptions = (event: React.ChangeEvent<HTMLSelectElement>) => {

        const { name, value } = event.target;
        if (value) {
            setInputValue((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        } else { // eliminamos el elemento sin no hay seleccion
            setInputValue((prevState) => {
                const updatedState: any = { ...prevState };
                delete updatedState[name];
                return updatedState;
            })
        }
    }

    useEffect(() => {
        dispatch(orderFilters(inputValue));
    }, [inputValue, dispatch]);


    return (
        <div className={style.container}>
            <div className={style.filters}>
                <p className={style.title_select}>Ordenar por precio</p>
                <select onChange={handlerOptions} className={style.select} name="order">
                    <option value="">TODOS LOS PRECIOS</option>
                    <option value="OrderAscPrice">MENOR A MAYOR</option>
                    <option value="OrderDesPrice">MAYOR A MENOR</option>
                </select>
                <p className={style.title_select}>Filtrar por precio</p>
                <select onChange={handlerOptions} className={style.select} name="price">
                    <option value="" >TODOS LOS PRECIOS</option>
                    <option value="100">MENOR A 100</option>
                    <option value="500">MENOR A 500</option>
                    <option value="1000">MENOR A 1000</option>
                </select>
                <p className={style.title_select}>Filtrar por IBU</p>
                <select onChange={handlerOptions} className={style.select} name="IBU">
                    <option value="">TODOS LOS IBUS</option>
                    <option value="10">MENOR A 20</option>
                    <option value="30">MENOR A 30</option>
                    <option value="20">MENOR A 40</option>
                    <option value="50">MENOR A 50</option>
                    <option value="60">MENOR A 60</option>
                </select>
                <p className={style.title_select}>Filtrar por puntuación</p>
                <select onChange={handlerOptions} className={style.select} name="qualification">
                    <option value="" >☆☆☆☆☆</option>
                    <option value="1">☆</option>
                    <option value="2">☆☆</option>
                    <option value="3">☆☆☆</option>
                    <option value="4">☆☆☆☆</option>
                    <option value="5">☆☆☆☆☆</option>
                </select>
                <p className={style.title_select}>Filtrar por tipo</p>
                <select className={style.select} onChange={handlerOptions} name="type">
                    <option value="" >TODOS LOS TIPOS</option>
                    <option value="Lager">Lager</option>
                    <option value="IPA">IPA</option>
                    <option value="Stout">Stout</option>
                    <option value="Porter">Porter</option>
                    <option value="Pilsner">Pilsner</option>
                    <option value="Belgian Ale">Belgian Ale</option>
                </select>
                <p className={style.title_select}>Filtrar por % Alcohol</p>
                <select onChange={handlerOptions} className={style.select}>
                    <option value="ABV" > ABV:</option>
                    <option value="OrderAscABV">MENOR A MAYOR</option>
                    <option value="OrderDesABV">MAYOR A MENOR</option>
                </select>
            </div>

        </div>

    );
};

export default Filters;