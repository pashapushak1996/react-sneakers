export const Card = ({ sneakers, addToCart, favorite }) => {
    const isExist = favorite.some((el) => el.id === sneakers.id);
    return (
        <div className="card">
            <div onClick={() => addToCart(sneakers)} className="card_icon">
                <img src="/img/icons/like.svg" alt=""/>
            </div>
            <img src={sneakers.image} alt=""/>
            <h4>{sneakers.description}</h4>
            <div className="card_footer">
                <div>
                    <span>Цена:</span>
                    <p>{sneakers.price}</p>
                </div>
                {!isExist ? <img src="/img/icons/plus.svg" alt=""/> : <img src="/img/icons/success.svg" alt=""/>}
            </div>
        </div>
    );
};
