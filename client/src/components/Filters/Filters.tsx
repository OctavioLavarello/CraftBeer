
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
                <p className={style.title_select}>Filtrar por precio</p>
                <select onChange={handlerOptions} className={style.select} name="price">
                    <option value="">TODOS LOS PRECIOS</option>
                    <option value="OrderAscPrice">MAYOR A MENOR</option>
                    <option value="OrderDesPrice">MENOR A MAYOR</option>
                </select>
                <p className={style.title_select}>Filtrar por IBU</p>
                <select onChange={handlerOptions} className={style.select}>
                    <option value="IBU" >IBU</option>
                    <option value="OrderAscIBU">MENOR A MAYOR</option>
                    <option value="OrderDesIBU">MAYOR A MENOR</option>
                </select>
                <p className={style.title_select}>Filtrar por puntuación</p>
                <select onChange={handlerOptions} className={style.select}>
                    <option value="Puntuacion" >☆☆☆☆☆</option>
                    <option value="OrderAscPuntuacion">MENOR A MAYOR</option>
                    <option value="OrderDesPuntuacion">MAYOR A MENOR</option>
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