import { ActionWithPayload } from "./actions/actions";
import { initialState } from "./reducer";

export const getAllBeer = (
  state = initialState,
  action: ActionWithPayload<string, any>
) => {
  return {
    ...state,
    allBeer: action.payload,
  };
};
export const orderFiltersReducer = (
  state = initialState,
  action: ActionWithPayload<string, any>
) => {
  return {
    ...state,
    beerFilters: action.payload,
  };
};

export const productCreated = (state = initialState) => {
  return {
    ...state,
  };
};

export const postCompany = (state = initialState)=> {
  return {
    ...state,
  }
}