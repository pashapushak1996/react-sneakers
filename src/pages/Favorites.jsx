import { useContext } from 'react';

import { CardList, Info, Loader, Title } from '../components';
import AppContext from '../context';

export const Favorites = (props) => {
    const { state: { favorites, isLoading } } = useContext(AppContext);

    if (isLoading) {
        return <Loader/>;
    }

    if (!favorites.length) {
        return <Info
            imageUrl={ '/img/noneFavorites.png' }
            description={ 'Ви нічого не додавали в улюблені.' }
            title={ 'Улюблених немає ;(' }/>;
    }

    return (
        <div className="p-40">
            <div className="mb-40">
                <Title pageTitle={ 'Мої закладки' }/>
            </div>
            <div className="content">
                <div className="content_cards">
                    <CardList items={ favorites } { ...props }/>
                </div>
            </div>
        </div>
    );
};
