import { CREATE_CART_ITEM, DELETE_CART_ITEM, SET_CART_ITEMS } from './cartActionTypes';

export const cartActionCreators = {
    setCartItems: (cartItems) => ({ type: SET_CART_ITEMS, payload: cartItems }),

    deleteCartItem: (currId) => ({ type: DELETE_CART_ITEM, currId }),

    createCartItem: (createdCartItem) => ({ type: CREATE_CART_ITEM, createdCartItem })
};
