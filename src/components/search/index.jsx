import styles from './Search.module.scss';

export const Search = (props) => {
    const { setSearchValue, searchValue } = props;

    return (
        <div className={styles.search}>
            <img src="/img/icons/search.svg" alt=""/>
            <input
                value={searchValue}
                onChange={({ target }) => setSearchValue(target.value)}
                type="text"
                placeholder='Поиск...'/>
        </div>
    );
};
