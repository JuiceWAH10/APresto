// for functionality of the cart; partner with cartReducer.js

export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = product => {
    return { type: ADD_TO_CART, product: product };
};