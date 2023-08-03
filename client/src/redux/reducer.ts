import { ActionWithPayload } from "./actions/actions";
import { getAllBeer, orderFiltersReducer } from "./reducerFunctions";

/* import { Action } from 'redux';
 */
export interface AppState {
  allBeer: object[];
  beerFilters: object;
};
export const initialState: AppState = {
  allBeer: [],
  beerFilters: {}
};



const rootReducer = (state = initialState, action: ActionWithPayload<string, any>) => {
  switch (action.type) {
    case "ADD_ALL_BEER": {
      return getAllBeer(state, action)
    }
    case "ORDER_FILTERS": {
      return orderFiltersReducer(state, action)
    }
    default:
      return state;
  }
};

export default rootReducer;

