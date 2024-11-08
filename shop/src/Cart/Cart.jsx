import './Cart.css';
import CartHead from './CartHead/CartHead';
import CartItem from './CartItem/CartItem';
import Cartbutton from './Cartbutton/Cartbutton';

export default function Cart({ cartItems, removeFromCart }) {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart">
            <CartHead />
            {cartItems.length === 0 ? (
                <>
                    <div className="cart_back">
                        <p>Корзина<br />пустая</p>
                    </div>
                    <div className="cart_total">
                        <p>Итого к оплате:</p>
                        <p className='Itog'>${calculateTotal()}</p>
                    </div>
                    <Cartbutton />
                </>
            ) : (
                <>
                    <CartItem cartItems={cartItems} removeFromCart={removeFromCart} />
                    <div className="cart_total">
                        <p>Итого к оплате:</p>
                        <p className='Itog'>${calculateTotal()}</p>
                    </div>
                    <Cartbutton />
                </>
            )}
        </div>
    );
}
