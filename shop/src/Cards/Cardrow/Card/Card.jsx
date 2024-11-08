import './Card.css';
import ButtonCard from './ButtonCard/ButtonCard';

export default function Card({ imageSrc, title, price, isActive, addToCart }) {
  const item = { imageSrc, title, price };

  return (
    <>
        <section className='cardes'>
            <div className={`card ${isActive ? 'card_active' : ''}`}>
                <div className="card_image" style={{ backgroundImage: `url(${imageSrc})` }}></div>
                <p className='card_p'>{title}</p>
                <ButtonCard addToCart={() => addToCart(item)} />
                <div className="price"><p>{price}$</p></div>
            </div>
        </section>
    </>
  );
}
