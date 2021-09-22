import styles from './Card.module.scss';

export const Card = ({
    sneakers, addToCart, favorite, deleteOneFromCart
}) => {
    const isExist = favorite.some((el) => el.id === sneakers.id);
    console.log(isExist);

    return (
        <div className={styles.card}>
            <div className={styles.card_icon}>
                <img src="/img/icons/like.svg" alt=""/>
            </div>
            <img src={sneakers.image} alt=""/>
            <h4>{sneakers.description}</h4>
            <div className={styles.card_footer}>
                <div>
                    <span>Цена:</span>
                    <p>{sneakers.price}</p>
                </div>
                {!isExist
                    ? <img onClick={() => addToCart(sneakers)} src="/img/icons/plus.svg" alt=""/>
                    : <img onClick={() => deleteOneFromCart(sneakers.id)} src="/img/icons/success.svg" alt=""/>}
            </div>
        </div>
    );
};
