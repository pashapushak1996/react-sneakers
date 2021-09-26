import styles from './Header.module.scss';

export function Header({ onClickCart, totalPrice, cartItemsCount }) {
    console.log(onClickCart);
    return (
        <header className={styles.header}>
            <div className={styles.header_info}>
                <img src="/img/header_logo.png" alt=""/>
                <div>
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className={styles.header_icons}>
                <div onClick={onClickCart} className={styles.header_cart}>
                    <img src="/img/icons/cart.svg" alt=""/>
                    <sup>{cartItemsCount}</sup>
                    <span>{totalPrice} грн</span>
                </div>
                <img src="/img/icons/heart.svg" alt=""/>
                <img src="/img/icons/profile.svg" alt=""/>
            </div>
        </header>
    );
}
