import axios from 'axios';

const baseURL = 'https://614f64bba706cd00179b7250.mockapi.io/';

export const instance = axios.create({ baseURL });
