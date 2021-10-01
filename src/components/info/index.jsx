import { useContext } from 'react';

import styles from './Info.module.scss';

import AppContext from '../../context';

export const CartInfo = ({ title, imageUrl, description }) => {
    const { setOpenedCart } = useContext(AppContext);

    return (
        <div className={ styles.info }>
            <div className={ styles.infoImage }>
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
