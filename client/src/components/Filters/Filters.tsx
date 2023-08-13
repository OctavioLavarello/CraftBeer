
import { useEffect, useState } from "react";
import style from "./Filters.module.css"
import { useDispatch } from "react-redux";
import { orderFilters } from "../../redux/actions/actions";

const Filters = () => {

    const dispatch = useDispatch()
    //Estado local que almacena el input
    const [inputValue, setInputValue] = useState({
    })

    const [buttonDisable, setbuttonDisable] = useState(true)

    // controlar los input de option 
    const handlerOptions = (event: React.ChangeEvent<HTMLSelectElement>) => {

        const { name, value } = event.target;
        if (value) {
            setbuttonDisable(false)
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

  

    const handlerButtonClick = () => {
        setInputValue({}),
        setbuttonDisable(true)
        const selectElements = document.querySelectorAll(`.${style.select}`);
        selectElements.forEach((selectElement:any) => {
          selectElement.value = "";
        });
    }


    useEffect(() => {
        dispatch(orderFilters(inputValue));
    }, [inputValue, dispatch]);


    return (
        <div className={style.container}>
            <div className={style.filters}>
                <button className={style.buttonFilters} disabled={buttonDisable} onClick={handlerButtonClick}>Limpiar filtros</button>
                <p className={style.title_select}>Ordenar por precio</p>
                <select onChange={handlerOptions} className={style.select} name="order">
                    <option value="">TODOS LOS PRECIOS</option>
                    <option value="OrderAscPrice">MENOR A MAYOR</option>
                    <option value="OrderDesPrice">MAYOR A MENOR</option>
                </select>
                <p className={style.title_select}>Filtrar por precio</p>
                <select onChange={handlerOptions} className={style.select} name="price">
                    <option value="" >TODOS LOS PRECIOS</option>
                    <option value="1">MENOR A 1</option>
                    <option value="2">MENOR A 2</option>
                    <option value="4">MENOR A 4</option>
                    <option value="8">MENOR A 8</option>
                    <option value="10">MENOR A 10</option>
                    <option value="15">MENOR A 15</option>
                    <option value="20">MENOR A 20</option>
                </select>
                <p className={style.title_select}>Filtrar por IBU</p>
                <select onChange={handlerOptions} className={style.select} name="IBU">
                    <option value="">TODOS LOS IBUS</option>
                    <option value="5">MENOR A 5</option>
                    <option value="10">MENOR A 10</option>
                    <option value="15">MENOR A 15</option>
                    <option value="20">MENOR A 20</option>
                    <option value="25">MENOR A 25</option>
                    <option value="30">MENOR A 30</option>
                    <option value="40">MENOR A 40</option>
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
                    <option value="Ale">Ale</option>
                    <option value="IPA">IPA</option>
                    <option value="Stout">Stout</option>
                    <option value="Porter">Porter</option>
                    <option value="Wheat Beer">Wheat Beer</option>
                    <option value="Sour Beer">Sour Beer</option>
                    <option value="Belgian Strong Ale">Belgian Strong Ale</option>
                    <option value="Pilsner">Pilsner</option>
                    <option value="Amber Ale">Amber Ale</option>
                    <option value="Barleywine">Barleywine</option>
                    <option value="Saison">Saison</option>
                    <option value="Rauchbier">Rauchbier</option>
                    <option value="Bock">Bock</option>
                    <option value="Scotch Ale">Scotch Ale</option>

                </select>
                <p className={style.title_select}>Filtrar por % Alcohol</p>
                <select onChange={handlerOptions} className={style.select} name="ABV">
                    <option value="" > TODOS LOS AVB</option>
                    <option value="1">ABV menor a 1 %</option>
                    <option value="3">ABV menor a 3 %</option>
                    <option value="4">ABV menor a 4 %</option>
                    <option value="8">ABV menor a 8 %</option>
                    <option value="10">ABV menor a 10 %</option>
                </select>
            </div>

        </div>

    );
};

export default Filters;