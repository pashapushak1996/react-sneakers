import styles from './Card.module.scss';

export const Card = (props) => {
    const {
        sneakers,
        onClickPlus,
        cartItems,
        favorites,
        onClickFavorite,
        onRemoveFromFavorites
    } = props;

    const isAddedItem = cartItems.some((item) => item.description.includes(sneakers.description));
    const isFavoriteItem = favorites.some((item) => item.description.includes(sneakers.description));

    const toggleAddOrRemove = () => {
        if (isFavoriteItem) {
            const foundedItem = favorites.find((item) => item.description.includes(sneakers.description));
            onRemoveFromFavorites(foundedItem.id);
            return;
        }
        onClickFavorite();
    };

    return (
        <div className={styles.card}>
            <div onClick={() => toggleAddOrRemove(sneakers.id)} className={styles.card_icon}>
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
