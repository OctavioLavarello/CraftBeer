import { ActionWithPayload } from "./actions/actions";

/* import { Action } from 'redux';
 */
interface AppState {
  allBeer: object[];
  beerFilters: string[];
};
const initialState: AppState = {
  beerFilters: [],
  allBeer: []
};


const rootReducer = (state = initialState, action: ActionWithPayload <string, any>) => {
  switch (action.type) {

    case "ADD_ALL_BEER": {
      return {
        ...state,
        allBeer: action.payload
      }
    }
    case "ORDER_FILTERS": {
      return {
        ...state,
        beerFilters: [...state.beerFilters, action.payload]
      }
    }

    default:
      return state;
  }
};

export default rootReducer;
