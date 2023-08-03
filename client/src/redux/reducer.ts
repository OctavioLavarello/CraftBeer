import { ActionWithPayload } from "./actions/actions";
import { getAllBeer, orderFilters } from "./reducerFunctions";

/* import { Action } from 'redux';
 */
export interface AppState {
  allBeer: object[];
  beerFilters: string[];
};
export const initialState: AppState = {
  beerFilters: [],
  allBeer: []
};


const rootReducer = (state = initialState, action: ActionWithPayload<string, any>) => {
  switch (action.type) {

    case "ADD_ALL_BEER": {
      return getAllBeer(state, action)
    }
    case "ORDER_FILTERS": {
      return orderFilters(state, action)
    }
    
    default:
      return state;
  }
};

export default rootReducer;

