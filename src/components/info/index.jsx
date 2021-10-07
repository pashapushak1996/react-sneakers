import { useContext } from 'react';

import { useHistory } from 'react-router-dom';
import styles from './Info.module.scss';

import AppContext from '../../context';

export const Info = ({ title, imageUrl, description, isCartItem }) => {
    const { setOpenedCart } = useContext(AppContext);
    const history = useHistory();


    return (
        <div className={ styles.info }>
            <div className={ styles.infoImage }>
                <img src={ imageUrl } alt=""/>
            </div>
            <h3>{ title }</h3>
            <p>{ description }</p>
            <button onClick={ () => isCartItem ? setOpenedCart() : history.goBack() } className="green_button">
                <img src="/img/icons/arrow-left.svg" alt=""/>
                <span>Вернутись назад</span>
            </button>
        </div>
    );
};
