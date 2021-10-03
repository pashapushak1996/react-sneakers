import { SET_ORDERS } from './ordersActionTypes';

export const ordersActionCreators = {
    setOrders: (orders) => ({ type: SET_ORDERS, payload: orders })
};
