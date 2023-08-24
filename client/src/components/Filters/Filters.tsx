
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
                <button className={style.buttonFilters} disabled={buttonDisable} onClick={handlerButtonClick}>Clean filters</button>
                <p className={style.title_select}>Order by price</p>
                <select onChange={handlerOptions} className={style.select} name="order">
                    <option value="">All prices</option>
                    <option value="OrderAscPrice">Minor to Major</option>
                    <option value="OrderDesPrice">Major to Minor</option>
                </select>
                <p className={style.title_select}>Filter by price</p>
                <select onChange={handlerOptions} className={style.select} name="price">
                    <option value="" >All prices</option>
                    <option value="1">Less than 1</option>
                    <option value="2">Less than 2</option>
                    <option value="4">Less than 4</option>
                    <option value="8">Less than 8</option>
                    <option value="10">Less than 10</option>
                    <option value="15">Less than 15</option>
                    <option value="20">Less than 20</option>
                </select>
                <p className={style.title_select}>Filter by IBU</p>
                <select onChange={handlerOptions} className={style.select} name="IBU">
                    <option value="">All IBU</option>
                    <option value="5">Less than 5</option>
                    <option value="10">Less than 10</option>
                    <option value="15">Less than 15</option>
                    <option value="20">Less than 20</option>
                    <option value="25">Less than 25</option>
                    <option value="30">Less than 30</option>
                    <option value="40">Less than 40</option>
                </select>
                <p className={style.title_select}>Filter by rating</p>
                <select onChange={handlerOptions} className={style.select} name="qualification">
                    <option value="" >☆☆☆☆☆</option>
                    <option value="1">☆</option>
                    <option value="2">☆☆</option>
                    <option value="3">☆☆☆</option>
                    <option value="4">☆☆☆☆</option>
                    <option value="5">☆☆☆☆☆</option>
                </select>
                <p className={style.title_select}>Filter by type</p>
                <select className={style.select} onChange={handlerOptions} name="type">
                    <option value="" >All types</option>
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
                <p className={style.title_select}>Filter by % of Alcohol</p>
                <select onChange={handlerOptions} className={style.select} name="ABV">
                    <option value="" > All ABV</option>
                    <option value="1">ABV less than 1 %.</option>
                    <option value="3">ABV less than 3 %.</option>
                    <option value="4">ABV less than 4 %.</option>
                    <option value="8">ABV less than 8 %.</option>
                    <option value="10">ABV less than 10 %.</option>
                </select>
            </div>

        </div>

    );
};

export default Filters;