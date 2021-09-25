import { instance } from './axiosConfig';

export const sneakersService = {
    getAllSneakers: async () => {
        const { data } = await instance.get('/sneakers');

        return data;
    },
    getAllCartItem: async () => {
        const { data } = await instance.get('/cart');

        return data;
    },
    createCartItem: async (obj) => {
        await instance.post('/cart', obj);
    },

    deleteCartItemById: async (id) => {
        await instance.delete(`/cart/${id}`);
    }
};
