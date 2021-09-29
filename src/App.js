import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import { Drawer, Header } from './components';
import { sneakersService } from './services';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';

function App() {
    const [
        openedCart,
        setOpenedCart
    ] = useState(false);

    const [
        items,
        setItems
    ] = useState([]);

    const [
        cartItems,
        setCartItems
    ] = useState([]);

    const [
        favorites,
        setFavorites
    ] = useState([]);

    const [
        searchValue,
        setSearchValue
    ] = useState('');

    useEffect(async () => {
        const [
            sneakersArr,
            cartItemsArr,
            favoritesArr
        ] = await Promise.all(
            [
                sneakersService.getAllSneakers(),
                sneakersService.getAllCartItems(),
                sneakersService.getAllFavoriteItems()
            ]
        );

        setItems(sneakersArr);
        setCartItems(cartItemsArr);
        setFavorites(favoritesArr);
    }, []);

    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

    const onAddToFavorites = async (obj) => {
        const favoriteItem = favorites.find((item) => +item.currId === +obj.currId);

        if (favoriteItem) {
            await sneakersService.deleteFavoriteItem(favoriteItem.id);
            setFavorites((prevState) => prevState.filter((product) => product.currId !== obj.currId));
            return;
        }

        const createdFavoriteItem = await sneakersService.createFavoriteItem(obj);

        setFavorites((prevState) => [
            ...prevState,
            createdFavoriteItem
        ]);
    };

    const onAddToCart = async (item) => {
        const {
            currId,
            imageUrl,
            description,
            price
        } = item;

        const cartItem = cartItems.find((item) => +item.currId === +currId);

        if (cartItem) {
            await sneakersService.deleteCartItemById(cartItem.id);
            setCartItems((prevState) => prevState.filter((product) => product.currId !== currId));
            return;
        }

        const createdCartItem = await sneakersService.createCartItem({
            currId,
            imageUrl,
            description,
            price
        });

        setCartItems((prevState) => [
            ...prevState,
            createdCartItem
        ]);
    };

    const onRemoveFromCart = async (sneakersId) => {
        await sneakersService.deleteCartItemById(sneakersId);

        setCartItems(cartItems.filter((sneakers) => sneakers.id !== sneakersId));
    };

    const searchByValue = (array, value) => {
        const lowerCaseSearchValue = value.toLowerCase();

        return array.filter((sneakers) => sneakers.description
            .toLowerCase()
            .includes(lowerCaseSearchValue));
    };

    const toggleOpenedCart = () => {
        setOpenedCart((prevState) => !prevState);
        // eslint-disable-next-line no-undef
        const [body] = document.getElementsByTagName('body');
        body.classList.toggle('noScroll', !openedCart);
    };

    return (
        <div className="wrapper clear">
            {openedCart
            && <Drawer totalPrice={totalPrice}
                       onClickRemove={onRemoveFromCart}
                       cartItems={cartItems}
                       onClose={() => toggleOpenedCart()}/>
            }
            <Header totalPrice={totalPrice}
                    onClickCart={() => toggleOpenedCart()}
                    cartItemsCount={cartItems.length}/>
            <Route path={'/'} exact render={() => <Home searchValue={searchValue}
                                                        setSearchValue={setSearchValue}
                                                        searchByValue={searchByValue}
                                                        items={items}
                                                        onAddToFavorites={onAddToFavorites}
                                                        onAddToCart={onAddToCart}
                                                        cartItems={cartItems}
                                                        favorites={favorites}/>}/>
            <Route path={'/favorites'} exact render={() => <Favorites
                onAddToFavorites={onAddToFavorites}
                onAddToCart={onAddToCart}
                cartItems={cartItems}
                favorites={favorites}/>}/>
        </div>
    );
}

export default App;
