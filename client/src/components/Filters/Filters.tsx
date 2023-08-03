import "./Filters.css"











const Filters = () => {
    return (

        <div className="container">
            <div className="filters">

            <p className="title-select">Filtrar por precio</p>
            <select className="select">
                <option value="Precio">PRECIOS</option>
                <option value="OrderAsc">MENOR A MAYOR</option>
                <option value="OrderDes">MAYOR A MENOR</option>

            </select>
            <p className="title-select">Filtrar por IBU</p>
            <select className="select">
                <option value="Precio" >IBU</option>
                <option value="OrderAsc">MENOR A MAYOR</option>
                <option value="OrderDes">MAYOR A MENOR</option>
            </select>
            <p className="title-select">Filtrar por puntuación</p>
            <select className="select">
                <option value="Precio" >☆☆☆☆☆</option>
                <option value="OrderAsc">MENOR A MAYOR</option>
                <option value="OrderDes">MAYOR A MENOR</option>
            </select>
            <p className="title-select">Filtrar por tipo</p>
            <select className="select">
                <option value="Precio" >Tipo</option>
                <option value="OrderAsc">Lager</option>
                <option value="OrderDes">IPA</option>
                <option value="OrderDes">Stout</option>
                <option value="OrderDes">Porter</option>
                <option value="OrderDes">Pilsner</option>
                <option value="OrderDes">Belgian Ale</option>
            </select>
            <p className="title-select">Filtrar por % Alcohol</p>
            <select className="select">
                <option value="Precio" > ABV:</option>
                <option value="OrderAsc">MENOR A MAYOR</option>
                <option value="OrderDes">MAYOR A MENOR</option>
            </select>
            </div>

        </div>

    );
};

export default Filters;