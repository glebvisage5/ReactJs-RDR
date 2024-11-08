import { useState } from 'react';
import './Cardrow.css'
import Card from './Card/Card'

export default function Cardrow({ CardImage, addToCart }){
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleCardClick = (index) => {
        setSelectedImageIndex(index);
    };

    return(
        <section className='card_all'>
            {CardImage.map((card, index) => (
                <div onClick={() => handleCardClick(index)}>
                    <Card key={index} imageSrc={card.src} title={card.title} price={card.price} isActive={selectedImageIndex === index} addToCart={addToCart} />
                </div>
            ))}
        </section>
    )
}