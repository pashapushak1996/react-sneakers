import styles from './CartItem.module.scss';

export const CartItem = ({ sneakers, onClickRemove }) => (
    <div className={styles.cartItem}>
        <div
            style={{ backgroundImage: `url(${sneakers.imageUrl})` }}
            className={styles.cartItem_img}>
        </div>
        <div>
            <p>{sneakers.description}</p>
            <b>{sneakers.price} грн</b>
        </div>
        <div onClick={() => onClickRemove(sneakers.id)} className={styles.cartItem_button}>
            <img src="/img/icons/exit.svg" alt=""/>
        </div>
    </div>
);
