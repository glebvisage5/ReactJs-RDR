import React, { useState, useEffect } from 'react';
import './Category.css';
import Cartridges from './Cartridges/Cartridges';
import Weapon from './Weapon/Weapon';
import Card from './Card.json';

export default function Category({ addToCart }) {
    const [selectedCategory, setSelectedCategory] = useState('cartridges');

    const handleButtonClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <>
            <section className='category'>
                <p>Выберите нужную категорию</p>
                <button 
                    className={`category_button cartridges ${selectedCategory === 'cartridges' ? 'active cartridges_active' : ''}`} onClick={() => handleButtonClick('cartridges')}>
                    <p>Патроны</p>
                </button>
                <button 
                    className={`category_button weapon ${selectedCategory === 'weapon' ? 'active weapon_active' : ''}`} onClick={() => handleButtonClick('weapon')}>
                    <p>Оружие</p>
                </button>
            </section>
            <section className='selected_category'>
                {selectedCategory === 'cartridges' && <Cartridges CardImage={Card.Cartridges} addToCart={addToCart} />}
                {selectedCategory === 'weapon' && <Weapon CardImage={Card.Weapon} addToCart={addToCart} />}
            </section>
        </>
    );
}
