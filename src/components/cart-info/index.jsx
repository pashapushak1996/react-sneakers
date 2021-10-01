import { useContext } from 'react';

import styles from './CartInfo.module.scss';

import AppContext from '../../context';

export const CartInfo = ({ title, imageUrl, description }) => {
    const { setOpenedCart } = useContext(AppContext);

    return (
        <div className={ styles.cartInfo }>
            <div className={ styles.cartInfoImage }>
                <img src={ imageUrl } alt=""/>
            </div>
            <h3>{ title }</h3>
            <p>{ description }</p>
            <button onClick={ () => setOpenedCart() } className="green_button">
                <img src="/img/icons/arrow-left.svg" alt=""/>
                <span>Вернутись назад</span>
            </button>
        </div>
    );
};
