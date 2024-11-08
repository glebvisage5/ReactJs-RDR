import './Cards.css';
import Cardrow from './Cardrow/Cardrow';
import Card from '../Card.json'

export default function Cards({ addToCart }) {
    return (
        <>
            <div className="header_card">
                <p className='shop_name'>МАГАЗИН <span>ТОВАРОВ</span></p>
                <div className="line line_top"></div>
                <div className="line line_bottom"></div>
                <div className="rhomb"><div className="romb"></div></div>
                <p className='shop_info'>В этом магазине Вы можете приобрести<br/>различные товары для бытия</p>
            </div>
            <Cardrow CardImage={Card.CardImage1} addToCart={addToCart} />
        </>
    );
}