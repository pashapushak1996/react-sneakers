/* eslint-disable */
import { useEffect, useState } from 'react';

import { Card, Drawer, Header, Search } from './components';
import { sneakersService } from './services';

function App() {

    const [openedCart, setOpenedCart] = useState(false);
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(async () => {
        const sneakers = await sneakersService.getAllSneakers();
        setItems(sneakers);
        const cartItems = await sneakersService.getAllCartItem();
        setCartItems(cartItems);
    }, []);

    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

    const addToCart = async (obj) => {
        await sneakersService.createCartItem(obj);
        setCartItems((prevState) => [...prevState, obj]);
    };

    const removeFromCart = async (sneakersId) => {
        await sneakersService.deleteCartItemById(sneakersId);
        setCartItems(cartItems.filter((sneakers) => sneakers.id !== sneakersId));
    };

    const searchByValue = (items, searchValue) => {
        const lowerCaseSearchValue = searchValue.toLowerCase();

        return items.filter((sneakers) =>
            sneakers.description
                .toLowerCase()
                .includes(lowerCaseSearchValue));
    }

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
                    {searchValue ? <h1>Ищем по запросу {searchValue}</h1> : <h1>Все кроссовки</h1>}
                    <Search searchValue={searchValue}
                            setSearchValue={setSearchValue}/>
                </div>
                <div className="content_cards">
                    {searchByValue(items, searchValue)
                        .map((sneakers) => <Card
                            key={sneakers.id}
                            sneakers={sneakers}
                            onClickPlus={addToCart}/>)}
                </div>
            </div>
        </div>
    );
}


export default App;
