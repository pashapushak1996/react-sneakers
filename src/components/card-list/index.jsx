import { useContext } from 'react';

import AppContext from '../../context';

import { Card } from '../card';


export const CardList = (props) => {
    const { state: { items }, isLoading } = useContext(AppContext);

    const {
        onAddToCart,
        onAddToFavorites,
        searchByValue,
        searchValue
    } = props;

    return (
        <div className="content_cards">
            { (isLoading ? [...Array(8)] : searchByValue(items, searchValue))
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
