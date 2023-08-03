import axios from "axios";


//interface para las Actions 
export interface ActionWithPayload<T, P> {
    type: T;
    payload: P;
}


//Actions para recibir todas las cervezas 
export const allBeers = () => {
    const endpoint = "http://localhost:3001"
    return async function (dispatch: any) {
        const response = await axios.get(endpoint)
        return dispatch({
            type: 'ADD_ALL_BEER',
            payload: response.data,
        });

    };
}

//Actions para recibir filtros por orden 
export const orderFilters = (filters: object): ActionWithPayload<"ORDER_FILTERS", object> => {
    return {
        type: "ORDER_FILTERS",
        payload: filters,
    }
}