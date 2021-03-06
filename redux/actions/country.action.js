import { getCountries, getCountry } from '../../api/countries';

export const actionTypes = {
  FETCH_COUNTRIES: 'FETCH_COUNTRIES',
  FETCH_COUNTRY: 'FETCH_COUNTRY',
  RECEIVE_COUNTRIES: 'RECEIVE_COUNTRIES',
  RECEIVE_COUNTRY: 'RECEIVE_COUNTRY',
  UPDATE_CURRENT_CITY_ID: 'UPDATE_CURRENT_CITY_ID',
};

export const receiveCountries = data => ({
  type: actionTypes.RECEIVE_COUNTRIES,
  data,
});

export const receiveCountry = data => ({
  type: actionTypes.RECEIVE_COUNTRY,
  data,
});

export const updateCurrentCityId = id => ({
  type: actionTypes.UPDATE_CURRENT_CITY_ID,
  data: id,
});

export const fetchCountries = ctx => dispatch => getCountries(ctx)
  .then(json => dispatch(receiveCountries(json.data.data.getCountry)));

export const fetchCountry = ctx => dispatch => getCountry(ctx)
  .then(json => dispatch(receiveCountry(json.data.data.getCountry[0])));
