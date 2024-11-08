import { useState } from 'react';
import './Weapon.css'
import Card from '../Card/Card'
import Centertext from '../Cartridges/Centertext/Centertext';

export default function Weapon({CardImage, addToCart}){
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleCardClick = (index) => {
        setSelectedImageIndex(index);
    };
    return(
        <>
            <section className='weapon_all'>
                <p className='text'>Список оружия</p>
                {CardImage.map((card, index) => (
                    <div onClick={() => handleCardClick(index)}>
                        <Card key={index} imageSrc={card.src} title={card.title} price={card.price} isActive={selectedImageIndex === index} addToCart={addToCart} />
                    </div>
                ))}
            </section>
            <section className='weapon_center'>
                <div className='back_calibre'>
                    <div className="calibre_image" style={{ backgroundImage: `url(${CardImage[selectedImageIndex].src})` }}></div>
                </div>
                <Centertext title={CardImage[selectedImageIndex].title} price={CardImage[selectedImageIndex].price} caliber={CardImage[selectedImageIndex].caliber} />
            </section>
        </>
    )
}