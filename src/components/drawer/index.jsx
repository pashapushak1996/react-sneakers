import { useContext, useState } from 'react';

import styles from './Drawer.module.scss';

import AppContext from '../../context';

import { sneakersService } from '../../services';

import { Info } from '../cart-info';
import { CartItem } from '../cart-item';


export const Drawer = (props) => {
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [orderNumber, setOrderNumber] = useState(null);

    const { totalPrice, setCartItems, cartItems } = useContext(AppContext);

    const {
        onClose,
        onClickRemove
    } = props;

    const onSendOrder = async () => {
        const order = await sneakersService.sendOrder({ items: cartItems });

        setOrderNumber(order.id);
        const cartItemsIds = cartItems.map((item) => item.id);
        await Promise.all(
            [...cartItemsIds.map(async (id) => await sneakersService.deleteCartItemById(id))]
        );
        setCartItems([]);
        setIsOrderComplete(true);
    };

    return (
        <div className={ styles.overlay }>
            <div className={ styles.drawer }>
                <div className="d-flex justify-between">
                    <h2>Корзина</h2>
                    <button onClick={ onClose } className={ styles.drawer_button }>
                        <img src="/img/icons/exit.svg" alt=""/>
                    </button>
                </div>
                { !cartItems.length
                    ? <Info title={ isOrderComplete ? 'Замовлення оформлено' : 'Корзина пуста' }
                            description={ isOrderComplete
                                ? `Замовлення номер ${ orderNumber } скоро буде передано службі доставки`
                                : 'Виберіть будь-ласка якийсь товар' }
                            imageUrl={ isOrderComplete ? '/img/sendOrder.svg' : '/img/emptyCart.svg' }/>
                    : <div className={ styles.cartItems }>
                        <div>
                            { cartItems.length ? cartItems.map((sneakers) =>
                                <CartItem
                                    onClickRemove={ onClickRemove }
                                    key={ sneakers.id }
                                    sneakers={ sneakers }/>) : <div>Немає замовлень</div> }
                        </div>
                        <div>
                            <div className={ styles.drawer_priceBlock }>
                                <ul>
                                    <li>
                                        <span>Разом: </span>
                                        <b>{ totalPrice } грн</b>
                                    </li>
                                    <li>
                                        <span>Податок 5%: </span>
                                        <b>{ totalPrice * 0.05 }</b>
                                    </li>
                                </ul>
                            </div>
                            <button onClick={ () => onSendOrder() } className="green_button">
                                <span>Оформить заказ</span>
                                <img src="/img/icons/arrow-right.svg" alt=""/>
                            </button>
                        </div>
                    </div> }

            </div>
        </div>
    );
};
