import { useContext } from 'react';

import AppContext from '../../context';

import { Card } from '../card';
import { Loader } from '../loader';


export const CardList = (props) => {
    const { state: { isLoading } } = useContext(AppContext);

    const {
        onAddToCart,
        onAddToFavorites,
        searchByValue,
        searchValue,
        items
    } = props;

    if (isLoading) {
        return <Loader/>;
    }

    return (
        <div className="content_cards">
            { (searchValue ? searchByValue(items, searchValue) : items)
                .map((sneakers, index) => <Card
                    key={ index }
                    sneakers={ sneakers }
                    onClickPlus={ () => onAddToCart(sneakers) }
                    onClickFavorite={ () => onAddToFavorites(sneakers) }
                    isLoading={ isLoading }
                />) }
        </div>
    );
};
