import './ButtonCard.css'

export default function ButtonCard({addToCart}){
    return (
        <>
            <button className="buy_button" onClick={addToCart}>
                <p>Приобрести</p>
            </button>
        </>
    )
}