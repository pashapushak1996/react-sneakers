import { CartItem } from '../cart-item';
import styles from './Drawer.module.scss';

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

                <div className="cartItems">
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
            </div>
        </div>
    );
};
