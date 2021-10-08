import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

import AppContext from '../../context';

import { FAVORITES, ORDERS } from '../../routes';

export const Header = ({ onClickCart }) => {
    const { state: { cartItems } } = useContext(AppContext);

    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <header className={ styles.header }>
            <NavLink to={ '/' }>
                <div className={ styles.header_info }>
                    <img src="img/header_logo.png" alt=""/>
                    <div>
                        <h3>REACT SNEAKERS</h3>
                        <p>Магазин найкращих кросовок</p>
                    </div>
                </div>
            </NavLink>
            <div className={ styles.header_icons }>
                <button onClick={ () => onClickCart() } className={ styles.header_cart }>
                    <img src="img/icons/cart.svg" alt=""/>
                    <sup>{ cartItems.length }</sup>
                    <span>{ totalPrice } грн</span>
                </button>
                <NavLink to={ FAVORITES }>
                    <img src="img/icons/heart.svg" alt=""/>
                </NavLink>
                <NavLink to={ ORDERS }>
                    <img src="img/icons/profile.svg" alt=""/>
                </NavLink>
            </div>
        </header>
    );
};
