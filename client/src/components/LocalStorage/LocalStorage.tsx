
export interface SaveDataLS {
    id: string,
    quantity: number,    
}

export const saveDataCart = (data: SaveDataLS) => {
    localStorage.setItem(data.id, JSON.stringify(data.quantity))
}



// Recuperar datos del localStorage
export const getDataFromCart = (name: string): SaveDataLS | null => {
    const storedData = localStorage.getItem(name);
    if (storedData) {
        // Convertir la cadena JSON de vuelta a un objeto y devolverlo
        return JSON.parse(storedData);
    }
    return null;
};