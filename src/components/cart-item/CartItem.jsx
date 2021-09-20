export const CartItem = ({ sneakers, deleteOneFromFavorite }) => (
    <div className="cartItem">
        <div style={{ backgroundImage: `url(${sneakers.image})` }}
            className="cartItem_img">
        </div>
        <div>
            <p>{sneakers.description}</p>
            <b>{sneakers.price}</b>
        </div>
        <div onClick={() => deleteOneFromFavorite(sneakers.id)} className="cartItem_button">
            <img src="/img/icons/exit.svg" alt=""/>
        </div>
    </div>
);
