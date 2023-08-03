import { ActionWithPayload } from "./actions/actions"
import { initialState } from "./reducer"



export const getAllBeer = (state = initialState, action: ActionWithPayload<string, any>) => {
    return ({
        ...state,
        allBeer: action.payload
    })
}


export const orderFilters = (state = initialState, action: ActionWithPayload<string, any>) => {
    return ({
        ...state,
        beerFilters: [...state.beerFilters, action.payload]
    })
}