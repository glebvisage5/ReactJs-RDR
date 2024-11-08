import { useState } from 'react';
import './Cartridges.css';
import Card from '../Card/Card';
import Centertext from './Centertext/Centertext';

export default function Cartridges({ CardImage, addToCart }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleCardClick = (index) => {
        setSelectedImageIndex(index);
    };

    return (
        <>
            <section className='cartridges_all'>
                <p className='text'>Список патрон</p>
                {CardImage.map((card, index) => (
                    <div key={index} onClick={() => handleCardClick(index)}>
                        <Card 
                            imageSrc={card.src}
                            title={card.title}
                            price={card.price}
                            isActive={selectedImageIndex === index}
                            addToCart={addToCart}
                        />
                    </div>
                ))}
            </section>
            <section className='cartridges_center'>
                <div className='back_calibre'>
                    <div className="calibre_image" style={{ backgroundImage: `url(${CardImage[selectedImageIndex].src})` }}></div>
                </div>
                <Centertext 
                    title={CardImage[selectedImageIndex].title}
                    price={CardImage[selectedImageIndex].price}
                    caliber={CardImage[selectedImageIndex].caliber}
                />
            </section>
        </>
    );
}
