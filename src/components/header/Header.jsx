export function Header({ showDrawer }) {
    return (
        <header className="header">
            <div className="header_info">
                <img src="/img/header_logo.png" alt=""/>
                <div>
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className="header_icons">
                <div onClick={() => showDrawer()} className="header_cart">
                    <img src="/img/icons/cart.svg" alt=""/>
                    <span>1205 руб</span>
                </div>
                <img src="/img/icons/heart.svg" alt=""/>
                <img src="/img/icons/profile.svg" alt=""/>
            </div>
        </header>
    );
}
