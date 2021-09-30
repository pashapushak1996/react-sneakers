import { useContext } from 'react';

import { Card, Title } from '../components';
import AppContext from '../context';

export const Favorites = (props) => {
    const { cartItems, favorites } = useContext(AppContext);

    const {
        onAddToCart,
        onAddToFavorites,
    } = props;

    return (
        <div className='p-40'>
            <div className='mb-40'>
                <Title pageTitle={'Мои закладки'}/>
            </div>
            <div className="content">
                <div className="content_cards">
                    {favorites
                        .map((sneakers) => <Card
                            key={sneakers.id}
                            sneakers={sneakers}
                            cartItems={cartItems}
                            favorites={favorites}
                            onClickPlus={() => onAddToCart(sneakers)}
                            onClickFavorite={() => onAddToFavorites(sneakers)}/>)}
                </div>
            </div>
        </div>
    );
};
