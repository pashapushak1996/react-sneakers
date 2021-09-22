import styles from './CartItem.module.scss';

export const CartItem = ({ sneakers, deleteOneFromFavorite }) => (
    <div className={styles.cartItem}>
        <div style={{ backgroundImage: `url(${sneakers.image})` }}
             className={styles.cartItem_img}>
        </div>
        <div>
            <p>{sneakers.description}</p>
            <b>{sneakers.price} грн</b>
        </div>
        <div onClick={() => deleteOneFromFavorite(sneakers.id)} className={styles.cartItem_button}>
            <img src="/img/icons/exit.svg" alt=""/>
        </div>
    </div>
);
