import { CartItem } from '../cart-item';

export const Drawer = ({
                           isHidden,
                           showDrawer,
                           favorite = [],
                           deleteOneFromFavorite
                       }) => {
    const price = favorite.reduce((acc, curr) => curr.price + acc, 0);

    return (
        <div style={{ display: isHidden ? 'none' : 'block' }} className="overlay">
            <div className="drawer">
                <div className="d-flex justify-between">
                    <h2>Корзина</h2>
                    <div onClick={() => showDrawer()} className="cartItem_button">
                        <img src="/img/icons/exit.svg" alt=""/>
                    </div>
                </div>
                {!favorite.length && <h1>Нема заказів</h1>}
                <div className="cartItems">
                    {favorite.length && favorite.map((sneakers) => <CartItem
                        key={sneakers.id}
                        sneakers={sneakers}
                        showDrawer={showDrawer}
                        deleteOneFromFavorite={deleteOneFromFavorite}
                    />)}

                </div>
                <div className="drawer_footer">
                    <div className="drawer_priceBlock">
                        <ul>
                            <li>
                                <span>Итого: </span>
                                <b>{price}</b>
                            </li>
                            <li>
                                <span>Налог 5%: </span>
                                <b>{price * 0.05}</b>
                            </li>
                        </ul>
                    </div>
                    <button className="green_button">
                        <span>Оформить заказ</span>
                        <img src="/img/icons/arrow-right.svg" alt=""/>
                    </button>
                </div>
            </div>
        </div>
    );
};
