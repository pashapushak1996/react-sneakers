/* eslint-disable */
import { useState } from 'react';

import { Card, Drawer, Header, Search } from './components';
import db from './data/db';

function App() {

    const [openedCart, setOpenedCart] = useState(false);

    const [foundedSneakers, setFoundedSneakers] = useState([]);


    const [
        cartItems,
        setCartItems
    ] = useState([]);

    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

    const addToCart = (obj) => {
        const isExist = cartItems.find((sneakersObj) => sneakersObj.id === obj.id);

        if (isExist) {
            return;
        }
        setCartItems((prevState) => [
            ...prevState,
            obj
        ]);
    };

    const removeFromCart = (sneakersId) => {
        setCartItems(cartItems.filter((sneakers) => sneakers.id !== sneakersId));
    };

    return (
        <div className="wrapper clear">
            {openedCart &&
            <Drawer totalPrice={totalPrice}
                    onClickRemove={removeFromCart}
                    cartItems={cartItems}
                    onClose={() => setOpenedCart(false)}/>
            }
            <Header totalPrice={totalPrice}
                    onClickCart={() => setOpenedCart(true)}
                    cartItemsCount={cartItems.length}/>
            <div className="content">
                <div className="content_header">
                    <h1>Все кроссовки</h1>
                    <Search
                        setFoundedSneakers={setFoundedSneakers}/>
                </div>
                <div className="content_cards">
                    {db.map((sneakers, index) => <Card
                        key={index + 1}
                        sneakers={sneakers}
                        onClickPlus={addToCart}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;
