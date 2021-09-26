import { instance } from './axiosConfig';

export const sneakersService = {
    getAllSneakers: async () => {
        const { data } = await instance.get('/sneakers');

        return data;
    },
    getAllCartItems: async () => {
        const { data } = await instance.get('/cart');

        return data;
    },
    getAllFavoriteItems: async () => {
        const { data } = await instance.get('/favorites');

        return data;
    },

    createFavoriteItem: async (obj) => {
        const { data } = await instance.post('/favorites', obj);

        return data;
    },
    deleteFavoriteItem: async (id) => {
        await instance.delete(`/favorites/${id}`);
    },
    createCartItem: async (obj) => {
        const { data } = await instance.post('/cart', obj);

        return data;
    },

    deleteCartItemById: async (id) => {
        await instance.delete(`/cart/${id}`);
    }
};
