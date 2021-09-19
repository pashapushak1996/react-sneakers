function App() {
    return (
        <div className="wrapper clear">
            <div className="overlay">
                <div className="drawer">
                    <h2>Корзина</h2>
                    <div className="cartItem">
                        <img src="/img/sneakers/2.png" alt=""/>
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <div className="cartItem_button">
                            <img src="/img/icons/exit.svg" alt=""/>
                        </div>
                    </div>
                    <div className="drawer_footer">
                        <div className="drawer_priceBlock">
                            <span>Итого: </span>
                            <b>21 498 руб. </b>
                        </div>
                        <div className="drawer_priceBlock">
                            <span>Налог 5%: </span>
                            <b>1074 руб. </b>
                        </div>
                        <div className="drawer_button">
                            <div>
                                <span>Оформить заказ</span>
                                <img src="/img/icons/arrow-right.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="header_info">
                    <img src="/img/header_logo.png" alt=""/>
                    <div>
                        <h3>REACT SNEAKERS</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <div className="header_icons">
                    <div className="header_cart">
                        <img src="/img/icons/cart.svg" alt=""/>
                        <span>1205 руб</span>
                    </div>
                    <img src="/img/icons/heart.svg" alt=""/>
                    <img src="/img/icons/profile.svg" alt=""/>
                </div>
            </div>
            <div className="content">
                <div className="content_header">
                    <h1>Все кроссовки</h1>
                    <div className="content_search">
                        <img src="/img/icons/search.svg" alt=""/>
                        <input type="text" placeholder='Поиск...'/>
                    </div>
                </div>
                <div className="content_cards">
                    <div className="card">
                        <div className="card_icon">
                            <img src="/img/icons/like.svg" alt=""/>
                        </div>
                        <img src="/img/sneakers/1.png" alt=""/>
                        <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
                        <div className="card_footer">
                            <div>
                                <span>Цена:</span>
                                <p>12 999 руб.</p>
                            </div>
                            <img src="/img/icons/plus.svg" alt=""/>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_icon">
                            <img src="/img/icons/unlike.svg" alt=""/>
                        </div>
                        <img src="/img/sneakers/2.png" alt=""/>
                        <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
                        <div className="card_footer">
                            <div>
                                <span>Цена:</span>
                                <p>12 999 руб.</p>
                            </div>
                            <img src="/img/icons/success.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
