import { Card } from '../card';

export const CardList = (props) => {
    const {
        items,
        cartItems,
        favorites,
        onAddToCart,
        onAddToFavorites,
    } = props;

    return (
        <div className="content_cards">
            {items
                .map((sneakers) => <Card
                    key={sneakers.id}
                    sneakers={sneakers}
                    cartItems={cartItems}
                    favorites={favorites}
                    onClickPlus={() => onAddToCart(sneakers)}
                    onClickFavorite={() => onAddToFavorites(sneakers)}/>)}
        </div>
    );
};
