import styles from './Card.module.scss';
import { Loader } from '../loader';

export const Card = (props) => {
    const {
        sneakers,
        onClickPlus,
        onClickFavorite,
        cartItems,
        favorites,
        isLoading
    } = props;

    const isCartItem = cartItems.length && cartItems.some((item) => item.description.includes(sneakers.description));
    const isFavoriteItem = favorites.length && favorites.some((item) => item.description.includes(sneakers.description));

    const handleClickFavorite = () => {
        onClickFavorite(sneakers);
    };

    const handleClickPlus = () => {
        onClickPlus(sneakers);
    };

    return (
        isLoading
            ? <div className={styles.card}><Loader/></div>
            : <div className={styles.card}>
                <div onClick={handleClickFavorite} className={styles.card_icon}>
                    <img src={isFavoriteItem
                        ? '/img/icons/like.svg'
                        : '/img/icons/unlike.svg'} alt=""/>
                </div>
                <img src={sneakers.imageUrl} alt=""/>
                <h4>{sneakers.description}</h4>
                <div className={styles.card_footer}>
                    <div>
                        <span>Цена:</span>
                        <p>{sneakers.price}</p>
                    </div>
                    <img onClick={handleClickPlus} src={
                        isCartItem
                            ? '/img/icons/success.svg'
                            : '/img/icons/plus.svg'} alt=""/>
                </div>
            </div>
    );
};
