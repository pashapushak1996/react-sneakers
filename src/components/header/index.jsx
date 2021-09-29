import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

export function Header({ onClickCart, totalPrice, cartItemsCount }) {
    return (
        <header className={styles.header}>
            <NavLink to={'/'}>
                <div className={styles.header_info}>
                    <img src="/img/header_logo.png" alt=""/>
                    <div>
                        <h3>REACT SNEAKERS</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </NavLink>
            <div className={styles.header_icons}>
                <div onClick={onClickCart} className={styles.header_cart}>
                    <img src="/img/icons/cart.svg" alt=""/>
                    <sup>{cartItemsCount}</sup>
                    <span>{totalPrice} грн</span>
                </div>
                <NavLink to={'/favorites'}>
                    <img src="/img/icons/heart.svg" alt=""/>
                </NavLink>
                <img src="/img/icons/profile.svg" alt=""/>
            </div>
        </header>
    );
}
