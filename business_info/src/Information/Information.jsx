import './Information.css'
import Frame from './Frame/Frame'
import Div from './Div/Div'
import Button from './Button/Button'

export default function Information(){
    return(
        <section className="info">
            <Frame />
            <p className='info_p'>Информация<br /><span>О БИЗНЕСЕ</span></p>
            <Div />
            <Button />
        </section>
    )
}