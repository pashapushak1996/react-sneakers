import { useState } from 'react';

import styles from './Search.module.scss';
import db from '../../data/db';

export const Search = ({ setFoundedSneakers }) => {
    const [
        value,
        setValue
    ] = useState('');

    const searchSneakers = () => {
        const filter = db.filter((sneakers) => {
            const number = sneakers.description.indexOf(value);
            if (number !== -1) {
                return sneakers;
            }
            return null;
        });
        setFoundedSneakers(filter);
    };

    return (
        <div className={styles.search}>
            <img onClick={searchSneakers} src="/img/icons/search.svg" alt=""/>
            <input
                value={value}
                onChange={({ target }) => setValue(target.value)}
                type="text" placeholder='Поиск...'/>
        </div>
    );
};
