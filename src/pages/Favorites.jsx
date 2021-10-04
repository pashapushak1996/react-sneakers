import { useContext } from 'react';

import { CardList, Title } from '../components';
import AppContext from '../context';

export const Favorites = (props) => {
    const { state: { favorites } } = useContext(AppContext);

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
