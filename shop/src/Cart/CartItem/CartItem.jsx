import './CartItem.css';

export default function CartItem({ cartItems, removeFromCart }) {
    return (
        <>
            {cartItems.map((item, index) => (
                <section className='items_all' key={index}>
                    <div className="cart_item">
                        <div className='Item_img' style={{ backgroundImage: `url(${item.imageSrc})` }}></div>
                        <p className='Item_title'>{item.title}</p>
                        <div className="btn_item">
                            <div className="arrow_all left_arrow"><div className="arrow"></div></div>
                            <p className='Item_price'>{item.price}$</p>
                            <div className="arrow_all right_arrow"><div className="arrow"></div></div>
                            <div className="item_back" onClick={() => removeFromCart(item.title)}>
                                <div className="item_b"></div>
                            </div>
                        </div>
                    </div>
                    <div className="item_quantity"><p>X{item.quantity}</p></div>
                </section>
            ))}
        </>
    );
}
