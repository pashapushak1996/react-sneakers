import { useContext } from 'react';

import AppContext from '../../context';
import styles from '../drawer/Drawer.module.scss';

export const Info = ({ title, imageUrl, description }) => {
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
