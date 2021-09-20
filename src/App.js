import { useState } from 'react';

import { Card, Drawer, Header } from './components';
import db from './data/db';

function App() {
    const [
        favorite,
        setFavorite
    ] = useState([]);

    const [
        isHidden,
        setIsHidden
    ] = useState(true);

    const addToCart = (obj) => {
        setFavorite((prevState) => [
            ...prevState,
            obj
        ]);
    };
    const deleteOneFromCart = (id) => {
        setFavorite(favorite.filter((sneakers) => sneakers.id !== id));
    };

    const showDrawer = () => {
        setIsHidden((prevState) => !prevState);
    };

    return (
        <div className="wrapper clear">
            <Drawer
                favorite={favorite}
                isHidden={isHidden}
                deleteOneFromFavorite={deleteOneFromCart}
                showDrawer={showDrawer}/>

            <Header showDrawer={showDrawer}/>

            <div className="content">
                <div className="content_header">
                    <h1>Все кроссовки</h1>
                    <div className="content_search">
                        <img src="/img/icons/search.svg" alt=""/>
                        <input type="text" placeholder='Поиск...'/>
                    </div>
                </div>
                <div className="content_cards">
                    {db.map((sneakers, index) => <Card
                        key={index + 1}
                        addToCart={addToCart}
                        favorite={favorite}
                        sneakers={{ ...sneakers, id: index + 1 }}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;
