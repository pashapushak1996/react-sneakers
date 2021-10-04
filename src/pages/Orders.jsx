import { useContext, useEffect, useState } from 'react';

import { appActionCreators, ordersActionCreators } from '../actions';

import { Card, Title } from '../components';

import AppContext from '../context';

import { ordersService } from '../services';

export const Orders = () => {

    const { state: { orders }, dispatch } = useContext(AppContext);

    const [orderNumber, setOrderNumber] = useState(0);

    const orderItems = orders.length > 0 && orders[orderNumber].items;
    const orderId = orders.length > 0 && orders[orderNumber].id;

    const nextOrder = () => {
        if (orderNumber >= orders.length) {
            return;
        }

        setOrderNumber(prevState => prevState + 1);
    };

    const prevOrder = () => {
        if (orderNumber === 0) {
            return;
        }

        setOrderNumber(prevState => prevState - 1);
    };

    const fetchData = async () => {
        try {
            dispatch(appActionCreators.loadingTrue());

            const orders = await ordersService.getAllOrders();

            dispatch(ordersActionCreators.setOrders(orders));

            dispatch(appActionCreators.loadingFalse());
        } catch (e) {
            alert('Помилка загрузки данних');
            console.error(e);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="p-40">
            <div className="mb-40">
                <Title pageTitle={ 'Мої покупки' }/>
            </div>
            <div>Заказ №{ orderId }</div>
            <button disabled={ orderNumber === 0 } onClick={ prevOrder }>Prev order</button>
            <button disabled={ orderNumber >= orders.length - 1 } onClick={ nextOrder }>Next order</button>
            <div className="content">
                <div className="content_cards">
                    { orderItems && orderItems
                        .map((item) => <Card key={ item.id } sneakers={ item }/>) }
                </div>
            </div>
        </div>
    );
};

