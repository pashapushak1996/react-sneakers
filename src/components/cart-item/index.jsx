import styles from './CartItem.module.scss';

export const CartItem = ({ sneakers, onClickRemove }) => {
    return (
        <div className={ styles.cartItem }>
            <div
                style={ { backgroundImage: `url(${ sneakers.imageUrl })` } }
                className={ styles.cartItem_img }>
            </div>
            <div>
                <p>{ sneakers.description }</p>
                <b>{ sneakers.price } грн</b>
            </div>
            <button onClick={ () => onClickRemove(sneakers) } className={ styles.cartItem_button }>
                <img src="img/icons/exit.svg" alt=""/>
            </button>
        </div>
    );
};
