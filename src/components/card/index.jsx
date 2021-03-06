import { useContext } from 'react';

import styles from './Card.module.scss';

import AppContext from '../../context';

import { Loader } from '../loader';

export const Card = (props) => {
    const { isCartItem, isFavoriteItem } = useContext(AppContext);

    const {
        sneakers,
        onClickPlus,
        onClickFavorite,
        isLoading
    } = props;

    const handleClickFavorite = () => {
        onClickFavorite(sneakers);
    };

    const handleClickPlus = () => {
        onClickPlus(sneakers);
    };

    return (
        isLoading
            ? <Loader/>
            : <div className={ styles.card }>
                {
                    onClickPlus && <button onClick={ handleClickFavorite } className={ styles.card_icon }>
                        <img src={ isFavoriteItem(sneakers.currId)
                            ? 'img/icons/like.svg'
                            : 'img/icons/unlike.svg' } alt=""/>
                    </button>
                }
                <img src={ sneakers.imageUrl } alt=""/>
                <h4>{ sneakers.description }</h4>
                <div className={ styles.card_footer }>
                    <div>
                        <span>Цена:</span>
                        <p>{ sneakers.price }</p>
                    </div>
                    { onClickFavorite && <button onClick={ handleClickPlus }>
                        <img src={
                            isCartItem(sneakers.currId)
                                ? 'img/icons/success.svg'
                                : 'img/icons/plus.svg' } alt=""/>
                    </button> }
                </div>
            </div>
    );
};
