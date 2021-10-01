import { useContext } from 'react';

import styles from './Drawer.module.scss';

import AppContext from '../../context';

import { CartItem } from '../cart-item';

const EmptyCart = ({ onClose }) => {
    return (
        <div className={ styles.emptyCart }>
            <div className={ styles.emptyCartImage }>
                <img src="/img/emptyCart.svg" alt=""/>
            </div>
            <h3>Корзина пустая</h3>
            <p>Добавте хоча б одну парку кросівок, щоб зробити заказ</p>
            <button onClick={ onClose } className="green_button">
                <img src="/img/icons/arrow-left.svg" alt=""/>
                <span>Вернутись назад</span>
            </button>
        </div>
    );
};

export const Drawer = (props) => {

    const { totalPrice } = useContext(AppContext);

    const {
        cartItems,
        onClose,
        onClickRemove
    } = props;

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
                    ? <EmptyCart isSuccess={ cartItems.length } onClose={ onClose }/>
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
                                        <span>Итого: </span>
                                        <b>{ totalPrice } грн</b>
                                    </li>
                                    <li>
                                        <span>Налог 5%: </span>
                                        <b>{ totalPrice * 0.05 }</b>
                                    </li>
                                </ul>
                            </div>
                            <button className="green_button">
                                <span>Оформить заказ</span>
                                <img src="/img/icons/arrow-right.svg" alt=""/>
                            </button>
                        </div>
                    </div> }

            </div>
        </div>
    );
};
