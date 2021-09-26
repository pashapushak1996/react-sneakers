/* eslint-disable */
import { useEffect, useState } from 'react';

import { Card, Drawer, Header, Search } from './components';
import { sneakersService } from './services';

function App() {

    const [openedCart, setOpenedCart] = useState(false);
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(async () => {
        const [sneakers, cartItems, favorites] = await Promise.all([sneakersService.getAllSneakers(), sneakersService.getAllCartItems(), sneakersService.getAllFavoriteItems()]);

        setItems(sneakers);
        setCartItems(cartItems);
        setFavorites(favorites);
    }, []);


    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

    const onAddToFavorites = async (obj) => {
        const createdFavoriteItem = await sneakersService.createFavoriteItem(obj);
        console.log(createdFavoriteItem);

        setFavorites(prevState => [...prevState, createdFavoriteItem]);
    };

    const onRemoveFromFavorites = async (sneakersId) => {
        await sneakersService.deleteFavoriteItem(sneakersId);

        setFavorites(favorites.filter((sneakers) => sneakers.id !== sneakersId));
    };

    const onAddToCart = async ({ imageUrl, description, price }) => {
        const createdCartItem = await sneakersService.createCartItem({ imageUrl, description, price });

        setCartItems((prevState) => [...prevState, createdCartItem]);
    };

    const onRemoveFromCart = async (sneakersId) => {
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

    const toggleOpenedCart = () => {
        setOpenedCart(prevState => !prevState);
        // eslint-disable-next-line no-undef
        const [body] = document.getElementsByTagName('body');
        body.classList.toggle('noScroll', !openedCart);
    }

    return (
        <div className="wrapper clear">
            {openedCart &&
            <Drawer totalPrice={totalPrice}
                    onClickRemove={onRemoveFromCart}
                    cartItems={cartItems}
                    onClose={() => toggleOpenedCart()}/>
            }
            <Header totalPrice={totalPrice}
                    onClickCart={() => toggleOpenedCart()}
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
                            cartItems={cartItems}
                            favorites={favorites}
                            onClickPlus={() => onAddToCart(sneakers)}
                            onClickFavorite={() => onAddToFavorites(sneakers)}
                            onRemoveFromFavorites={onRemoveFromFavorites}/>)}
                </div>
            </div>
        </div>
    );
}


export default App;
