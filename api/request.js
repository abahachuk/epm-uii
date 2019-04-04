import axios from 'axios';

// TODO: hardcode
const API_HOST = 'http://ecsc00a025df.epam.com/api';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const getUrl = endpoint => API_HOST + endpoint;

export const post = async ({ endpoint = '', data, headers = {}, ctx }) => {
  try {
    return axios({
      method: 'POST',
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      url: getUrl(endpoint),
      data,
    });
  } catch (error) {
    return error;
  }
};

export const get = async ({ endpoint = '', ctx }) => {
  const headers = {
    ...defaultHeaders,
  };

  try {
    return axios({
      method: 'GET',
      headers,
      url: getUrl(endpoint),
    });
  } catch (error) {
    return error;
  }
};
