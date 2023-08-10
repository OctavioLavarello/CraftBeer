const postProductValidation = (
    name: string,
    image: string,
    type: string,
    ABV: number,
    description: string,
    price: number,
    stock: number, // no debe ser menor a 0 y debe ser un numero. 
    IBU: number,
    presentation: string,
    userCompanyId: string,

): string | null => {

    if (!name) return "name is required" ;
    // Expresión regular que permite letras (mayúsculas y minúsculas), espacios y apóstrofes.
    const nameRegex = /^[a-zA-Z\s']+$/;
    if (!nameRegex.test(name)) {
        return "Invalid name format. Only letters, spaces, and apostrophes are allowed.";
    }
    if (!image) return "image is required";
    const validImageURLRegex = /^(https?|ftp):[^\s/$.?#].[^\s]*\.(jpg|jpeg|png|gif|bmp|webp|svg|tiff|ico|jfif|pjpeg|pjp|avif|apng)$|^.+$/;
    if (!validImageURLRegex.test(image)) {
        return "Invalid image URL";
    }
    if (!type) return "type is required";
    // Expresion regular que permite solo los tipos de cerveza validada.
    const validBeerTypesRegex = /^(Lager|Ale|IPA|Stout|Porter|Wheat Beer|Sour Beer|Belgian Strong Ale|Pilsner|Amber Ale|Barleywine|Saison|Rauchbier|Bock|Scotch Ale)$/i;
    if (!validBeerTypesRegex.test(type)) {
        return "Invalid beer type";
    }
    if (!ABV) return "ABV is required";
    
    if (!description) return "description is required";
    const validDescriptionRegex = /^(?!\s*$).+/;
    if (!validDescriptionRegex.test(description)) {
        return "Invalid description";
    }
    if (!price) return "price is required";
    const validPriceRegex = /^(?!0\.00)\d+(\.\d{1,2})?$/;
    if (!validPriceRegex.test(price.toString())) {
        return "Invalid price value";
    }
    if (!stock) return "stock is required";
    const validStockRegex = /^(?:0|[1-9]\d*)$/;
    if (!validStockRegex.test(stock.toString())) {
        return "must not be less than 0 and must be a number";
    }
    
    if (!IBU) return "ibu is required";
    const validIBURegex = /^(?:[1-9]\d?|100)$/;
    if (!validIBURegex.test(IBU.toString())) {
        return "Invalid IBU value";
    }
    if (!presentation) return "presentation is required";
    const validPresentationRegex = /^[A-Za-z\s]+$/;
    if (!validPresentationRegex.test(presentation)) {
        return "Invalid presentation format";
    }
    if (!userCompanyId) return "userCompanyId is required";
    const validUserCompanyIdRegex = /^[a-zA-Z0-9_-]{6,}$/;
    if (!validUserCompanyIdRegex.test(userCompanyId)) {
        return "Invalid userCompanyId format";
}
    
    return null;
}

export default postProductValidation


