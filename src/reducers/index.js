import {
    CREATE_CART_ITEM,
    CREATE_FAVORITE_ITEM, DELETE_CART_ITEM,
    DELETE_FAVORITE_ITEM, LOADING_FALSE, LOADING_TRUE,
    SET_CART_ITEMS,
    SET_FAVORITES,
    SET_ITEMS
} from '../actions';


export const initialState = {
    cartItems: [],
    favorites: [],
    isLoading: false,
    items: []
};

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return { ...state, items: action.payload };

        case SET_FAVORITES:
            return { ...state, favorites: action.payload };

        case CREATE_FAVORITE_ITEM:
            return { ...state, favorites: [...state.favorites, action.createdFavoriteItem] };

        case DELETE_FAVORITE_ITEM:
            return {
                ...state,
                favorites:
                    state.favorites.filter((favoriteItem) => favoriteItem.currId !== action.currId)
            };

        case SET_CART_ITEMS:
            return { ...state, cartItems: action.payload };

        case CREATE_CART_ITEM:
            return { ...state, cartItems: [...state.cartItems, action.createdCartItem] };


        case DELETE_CART_ITEM:
            return {
                ...state,
                cartItems:
                    state.cartItems.filter((cartItem) => cartItem.currId !== action.currId)
            };

        case LOADING_TRUE:
            return { ...state, isLoading: true };

        case LOADING_FALSE:
            return { ...state, isLoading: false };

        default:
            return state;
    }
};
