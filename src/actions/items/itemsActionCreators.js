import { SET_ITEMS } from './itemsActionTypes';

export const itemsActionCreators = {
    setItems: (items) => ({ type: SET_ITEMS, payload: items })
};
