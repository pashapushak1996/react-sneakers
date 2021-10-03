import styles from './Search.module.scss';

export const Search = (props) => {
    const { setSearchValue, searchValue } = props;

    const onChange = ({ target }) => {
        setSearchValue(target.value);
    };

    return (
        <div className={ styles.search }>
            <img src="/img/icons/search.svg" alt=""/>
            <input
                value={ searchValue }
                onChange={ onChange }
                type="text"
                placeholder="Поиск..."/>
            { searchValue && <button onClick={ () => setSearchValue('') } className={ styles.search_btn }>
                <img src="/img/icons/exit.svg" alt=""/>
            </button> }
        </div>
    );
};
