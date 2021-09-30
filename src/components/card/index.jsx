import styles from './Card.module.scss';
import { Loader } from '../loader';

export const Card = (props) => {
    const {
        sneakers,
        onClickPlus,
        onClickFavorite,
        isLoading,
        isFavorite,
        isAdded
    } = props;

    const handleClickFavorite = () => {
        onClickFavorite(sneakers);
    };

    const handleClickPlus = () => {
        onClickPlus(sneakers);
    };

    return (
        isLoading
            ? <div className={ styles.card }><Loader/></div>
            : <div className={ styles.card }>
                <button onClick={ handleClickFavorite } className={ styles.card_icon }>
                    <img src={ isFavorite
                        ? '/img/icons/like.svg'
                        : '/img/icons/unlike.svg' } alt=""/>
                </button>
                <img src={ sneakers.imageUrl } alt=""/>
                <h4>{ sneakers.description }</h4>
                <div className={ styles.card_footer }>
                    <div>
                        <span>Цена:</span>
                        <p>{ sneakers.price }</p>
                    </div>
                    <button onClick={ handleClickPlus }>
                        <img src={
                            isAdded
                                ? '/img/icons/success.svg'
                                : '/img/icons/plus.svg' } alt=""/>
                    </button>
                </div>
            </div>
    );
};
