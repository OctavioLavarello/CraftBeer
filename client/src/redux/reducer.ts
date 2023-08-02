import { Action } from 'redux';

const initialState = {
  // Coloca el estado inicial de tu aplicación aquí
};

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
