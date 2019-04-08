import { countryInitialState } from '../states';
import { actionTypes } from '../actions/country.action';

export default function reducer(state = countryInitialState, action = {}) {
  switch (action.type) {
    case actionTypes.RECEIVE_COUNTRY: {
      const country = action.data;
      const { id = '', name = '', closestCity = {}, cities = [] } = country;

      const newState = { ...state, id, cities, name };
      newState.currentCityId = closestCity.id

      return newState;
    }
    case actionTypes.UPDATE_CURRENT_CITY_ID:
      const newState = { ...state };

      newState.currentCityId = action.data;

      return newState;
    default:
      return state;
  }
}
