import TIMEOUT from './config';
import products from './products.json';

export const getProducts = (cb, timeout) => setTimeout(() => cb(products), timeout || TIMEOUT);
export const buyProducts = (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT);
