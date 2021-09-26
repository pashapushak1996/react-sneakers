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
            {searchValue && <div onClick={() => setSearchValue('')} className={styles.search_btn}>
                <img src="/img/icons/exit.svg" alt=""/>
            </div>}
        </div>
    );
};
