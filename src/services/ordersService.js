import { instance } from './axiosConfig';

export const ordersService = {
    createOrder: async (orderObj) => {
        const { data } = await instance.post('/orders', orderObj);

        return data;
    },
    getAllOrders: async () => {
        const { data } = await instance.get('/orders');

        return data;
    }
};
