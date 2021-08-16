import axios from 'axios';

export const httpFetch = (method: any = 'get', url: any, body?: any, query?: any) =>
  axios({
    method,
    url: process.env.REACT_APP_URL_SERVICES + url,
    data: body,
    params: query,
  });