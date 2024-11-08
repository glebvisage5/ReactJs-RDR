import './Div.css'
import Div_info from './Div_info/Div_info'
import information from './info.json'

export default function Div() {
    const data = information.information[0];
    return (
        <section className='div_all'>
            <Div_info info={data.name} info_name={data.name_name} />
            <Div_info info={data.business} info_name={data.business_name} />
            <Div_info info={data.price} info_name={data.price_name} />
        </section>
    );
}
