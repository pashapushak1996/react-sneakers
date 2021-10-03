import { useEffect, useReducer, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

import {
    appActionCreators,
    cartActionCreators,
    favoritesActionCreators,
    itemsActionCreators
} from './actions';
import { Drawer, Header } from './components';

import AppContext from './context';

import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';

import { initialState, reducer } from './reducers';

import { FAVORITES, SNEAKERS } from './routes';
import { sneakersService } from './services';


function App() {

    const [state, dispatch] = useReducer(reducer, initialState);

    const { cartItems, favorites, isLoading } = state;

    const [openedCart, setOpenedCart] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const fetchData = async () => {
        try {
            dispatch(appActionCreators.loadingTrue());

            const [
                items,
                cartItems,
                favorites
            ] = await Promise.all(
                [
                    sneakersService.getAllSneakers(),
                    sneakersService.getAllCartItems(),
                    sneakersService.getAllFavoriteItems()
                ]
            );

            dispatch(itemsActionCreators.setItems(items));
            dispatch(cartActionCreators.setCartItems(cartItems));
            dispatch(favoritesActionCreators.setFavoriteItems(favorites));
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(appActionCreators.loadingFalse());
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const onAddToFavorites = async ({ currId, imageUrl, description, price }) => {
        const favoriteItem = favorites.find((item) => +item.currId === +currId);

        if (favoriteItem) {
            await sneakersService.deleteFavoriteItem(favoriteItem.id);

            dispatch(favoritesActionCreators.deleteFavoriteItem(currId));

            return;
        }

        const createdFavoriteItem = await sneakersService.createFavoriteItem({
            currId,
            imageUrl,
            description,
            price
        });

        dispatch(favoritesActionCreators.createFavoriteItem(createdFavoriteItem));
    };

    const onAddToCart = async ({ currId, imageUrl, description, price }) => {

        const cartItem = cartItems.find((item) => +item.currId === +currId);

        if (cartItem) {
            await sneakersService.deleteCartItemById(cartItem.id);

            dispatch(cartActionCreators.deleteCartItem(currId));

            return;
        }

        const createdCartItem = await sneakersService.createCartItem({
            currId,
            description,
            imageUrl,
            price
        });

        dispatch(cartActionCreators.createCartItem(createdCartItem));
    };

    const onRemoveFromCart = async ({ currId, id }) => {
        await sneakersService.deleteCartItemById(id);

        dispatch(cartActionCreators.deleteCartItem(currId));
    };

    const isCartItem = (id) => cartItems.some((item) => item.currId === id);

    const isFavoriteItem = (id) => favorites.some((item) => item.currId === id);

    const searchByValue = (array, value) => {
        const lowerCaseSearchValue = value.toLowerCase();

        return array.filter((sneakers) => sneakers.description
            .toLowerCase()
            .includes(lowerCaseSearchValue));
    };


    useEffect(() => {
        const body = document.querySelector('body');

        body.style.overflow = openedCart ? 'hidden' : 'auto';

    }, [openedCart]);


    const toggleOpenedCart = () => {
        setOpenedCart((prevState) => !prevState);
    };

    return (
        <AppContext.Provider value={ {
            dispatch,
            isCartItem,
            isFavoriteItem,
            setOpenedCart,
            state
        } }>
            <div className="wrapper clear">
                { openedCart
                && <Drawer
                    onClickRemove={ onRemoveFromCart }
                    onClose={ () => toggleOpenedCart() }/>
                }
                <Header onClickCart={ () => toggleOpenedCart() }/>

                <Route
                    path={ SNEAKERS }
                    exact
                    render={ () =>
                        <Home
                            searchValue={ searchValue }
                            setSearchValue={ setSearchValue }
                            searchByValue={ searchByValue }
                            onAddToFavorites={ onAddToFavorites }
                            onAddToCart={ onAddToCart }
                            isLoading={ isLoading }/> }/>
                <Route
                    path={ FAVORITES }
                    exact
                    render={ () =>
                        <Favorites
                            onAddToFavorites={ onAddToFavorites }
                            onAddToCart={ onAddToCart }/> }/>

                <Redirect from={ '/' } to={ SNEAKERS }/>
            </div>
        </AppContext.Provider>
    );
}

export default App;
