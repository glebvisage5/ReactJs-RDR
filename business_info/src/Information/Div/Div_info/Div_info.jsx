import './Div_info.css'

export default function Div_info({info, info_name}){
    return(
        <div className="div_info">
            <p className='head'>{info}</p>
            <p className='foot'>{info_name}</p>
        </div>
    )
}