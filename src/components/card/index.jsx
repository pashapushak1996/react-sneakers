import { useState } from 'react';

import styles from './Card.module.scss';

export const Card = (props) => {
    const { sneakers, onClickPlus } = props;

    const [
        isAdded,
        setIsAdded
    ] = useState(false);

    const onClickAdd = (obj) => {
        setIsAdded(!isAdded);
        onClickPlus(obj);
    };

    return (
        <div className={styles.card}>
            <div className={styles.card_icon}>
                <img src="/img/icons/like.svg" alt=""/>
            </div>
            <img src={sneakers.imageUrl} alt=""/>
            <h4>{sneakers.description}</h4>
            <div className={styles.card_footer}>
                <div>
                    <span>Цена:</span>
                    <p>{sneakers.price}</p>
                </div>
                <img onClick={() => onClickAdd(sneakers)} src={
                    !isAdded
                        ? '/img/icons/plus.svg'
                        : '/img/icons/success.svg'} alt=""/>
            </div>
        </div>
    );
};
