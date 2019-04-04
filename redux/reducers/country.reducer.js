import { countriesInitialState } from '../states';
import { actionTypes } from '../actions/countries.action';

export default function reducer(state = countriesInitialState, action = {}) {
  switch (action.type) {
    case actionTypes.RECEIVE_COUNTRIES: {
      const newState = { ...state };
      newState.countries = action.data;
      
      return newState;
    }
    case actionTypes.RECEIVE_COUNTRY: {
      const newState = { ...state };
      newState.currentCountry = action.data;

      return newState;
    }
    default:
      return state;
  }
}
