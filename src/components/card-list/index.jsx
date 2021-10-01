import { useContext } from 'react';

import AppContext from '../../context';

import { Card } from '../card';


export const CardList = (props) => {
    const { items, cartItems, favorites } = useContext(AppContext);

    const {
        onAddToCart,
        onAddToFavorites,
        searchByValue,
        searchValue,
        isLoading
    } = props;

    return (
        <div className="content_cards">
            { (isLoading ? [...Array(8)] : searchByValue(items, searchValue))
                .map((sneakers, index) => <Card
                    key={ index }
                    sneakers={ sneakers }
                    cartItems={ cartItems }
                    favorites={ favorites }
                    onClickPlus={ () => onAddToCart(sneakers) }
                    onClickFavorite={ () => onAddToFavorites(sneakers) }
                    isLoading={ isLoading }
                />) }
        </div>
    );
};
