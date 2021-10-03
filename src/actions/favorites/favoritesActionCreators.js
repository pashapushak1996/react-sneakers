import {
    CREATE_FAVORITE_ITEM,
    DELETE_FAVORITE_ITEM,
    SET_FAVORITES
} from './favoritesActionTypes';

export const favoritesActionCreators = {
    setFavoriteItems: (favoritesItems) => ({ type: SET_FAVORITES, payload: favoritesItems }),

    deleteFavoriteItem: (currId) => ({ type: DELETE_FAVORITE_ITEM, currId }),

    createFavoriteItem: (createdFavoriteItem) => ({ type: CREATE_FAVORITE_ITEM, createdFavoriteItem })
};
