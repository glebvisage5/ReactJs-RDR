import './CartHead.css'

export default function CartHead(){
    return(
        <>
            <div className="header_cart">
                <p className='shop_name'>КОРЗИНА <span>ТОВАРОВ</span></p>
                <div className="line line_top"></div>
                <div className="line line_bottom"></div>
                <p className='shop_info'>В этом магазине Вы можете преобрести<br/>различные товары для бытия</p>
            </div>
        </>
    )
}