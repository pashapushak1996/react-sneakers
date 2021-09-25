import { CartItem } from '../cart-item';
import styles from './Drawer.module.scss';

const EmptyCart = () => {
    return (
        <div className={styles.emptyCart}>
            <h3>Корзина пустая</h3>
            <img className={styles.emptyCartImage} src="/img/emptyCart.svg" alt=""/>
            <p>Добавте хоча б одну парку кросівок, щоб зробити заказ</p>
            <button className="green_button">
                <span>Вернутись назад</span>
                <img src="/img/icons/arrow-left.svg" alt=""/>
            </button>
        </div>);
};

export const Drawer = (props) => {
    const {
        cartItems,
        onClose,
        onClickRemove,
        totalPrice
    } = props;
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <div className="d-flex justify-between">
                    <h2>Корзина</h2>
                    <div onClick={onClose} className="cartItem_button">
                        <img src="/img/icons/exit.svg" alt=""/>
                    </div>
                </div>
                {!cartItems.length
                    ? <EmptyCart/>
                    : <div className={styles.cartItems}>
                        <div>
                            {cartItems.length ? cartItems.map((sneakers) => <CartItem
                                onClickRemove={onClickRemove}
                                key={sneakers.id}
                                sneakers={sneakers}/>) : <div>Немає замовлень</div>}
                        </div>
                        <div>
                            <div className={styles.drawer_priceBlock}>
                                <ul>
                                    <li>
                                        <span>Итого: </span>
                                        <b>{totalPrice} грн</b>
                                    </li>
                                    <li>
                                        <span>Налог 5%: </span>
                                        <b>{totalPrice * 0.05}</b>
                                    </li>
                                </ul>
                            </div>
                            <button className="green_button">
                                <span>Оформить заказ</span>
                                <img src="/img/icons/arrow-right.svg" alt=""/>
                            </button>
                        </div>
                    </div>}

            </div>
        </div>
    );
};
