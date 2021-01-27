import React, {  useState } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {setMessageShow} from '../store/message/action'
import '../Buttons/Buttons.scss'

function AddNew(props){

    const [code,setCode]=useState()
    const [name,setName]=useState()
    const [count,setCount]=useState(1)
    let daet=new Date()
    let mn=daet.getMonth()+1
        if (mn<=9){mn='0'+mn}

    const [date_beg,setDate_beg]=useState(daet.getFullYear()+'-'+mn+'-'+daet.getDate())
    const [date_end,setDate_end]=useState('2099-12-31')

    const Closes=()=>{
        props.add()
    }

    const Chan_code=(e)=>{
        setCode(e.target.value)
    }

    const Chan_name=(e)=>{
        setName(e.target.value)
    }

    const Chan_count=(e)=>{
        setCount(e.target.value)
    }

    const Chan_beg=(e)=>{
        setDate_beg(e.target.value)
    }

    const Chan_end=(e)=>{
        setDate_end(e.target.value)
    }

    const Sent=()=>{
        let data={
            SOST_KOD_KMU:code,
            SOST_VIBOR:1,
            SOST_KOD_PR:name,
            SOST_DAT_B:date_beg,
            SOST_DAT_E:date_end,
            SOST_KOL:count,
        }
        axios.post('/prejsk/addSost',{data}).then(res=>{props.setMessageShow('Запись добавлена',1)});
        Closes();
    }

return(
    <div className='global_pos'>{console.log(props)}
        <div className='global_pos_two'>
            <div className='tre sd'>
                <div className='f'>
                    <p>Комплексная услуга</p>
                        <textarea onChange={Chan_code} value={code}></textarea>
                </div>
                <div className='f'>
                    <p>Код</p>
                        <textarea onChange={Chan_name} value={name}></textarea>
                </div>
                <div className='f'>
                    <p>Количество</p>
                        <textarea onChange={Chan_count} value={count}></textarea>
                </div>
                <div className='f'><p>Дата начала действия</p>
                    <input className='selections' onChange={Chan_beg} value={date_beg} type='date'/>
                </div>
                <div className='f'><p>Дата окончания действия</p>
                    <input className='selections'  onChange={Chan_end} value={date_end} type='date'/>
                </div>
                <div>
                    <button className='ext_but' onClick={Sent}>Send</button>
                    <button className='ext_but' onClick={Closes}>Closes</button>
                </div>
            </div>
        </div>
    </div>
)
}


const pushStateToProps = (state) => {
    return{
        
    };
  };

  const pushDispatchToProps = {
    setMessageShow
  };

export default connect(pushStateToProps,pushDispatchToProps) (AddNew);


