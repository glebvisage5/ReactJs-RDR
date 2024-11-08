import './Centertext.css'

export default function Centertext({title, caliber, price}){
    return(
        <>
            <div className="centertext">
                <p className='title'>{title}</p>
                <div className="text_gird calibre_text">
                    <p>Калибр</p>
                    <p className='text_gird_p'>{caliber}</p>
                </div>
                <div className="text_gird price_text">
                    <p>Цена</p>
                    <p className='text_gird_p color_p'>{price}$</p>
                </div>
            </div>
        </>
    )
}