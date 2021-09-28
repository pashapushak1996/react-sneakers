import styles from './Card.module.scss';

export const Card = (props) => {
    const {
        sneakers,
        onClickPlus,
        cartItems,
        favorites,
        onClickFavorite,
    } = props;

    const isAddedItem = cartItems.some((item) => item.description.includes(sneakers.description));
    const isFavoriteItem = favorites.some((item) => item.description.includes(sneakers.description));

    return (
        <div className={styles.card}>
            <div onClick={() => onClickFavorite(sneakers)} className={styles.card_icon}>
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
                <img onClick={onClickPlus} src={
                    !isAddedItem
                        ? '/img/icons/plus.svg'
                        : '/img/icons/success.svg'} alt=""/>
            </div>
        </div>
    );
};
