import React, { useState } from 'react'
import axios from 'axios'
import '../Buttons/Buttons.scss'
import {connect} from 'react-redux';
import {setMessageShow} from '../store/message/action'


function Update(props){
    let line=props.act_id   
    let datb=line.SOST_DAT_B
    let date=line.SOST_DAT_E
    const [date_b,setDate_b]=useState(datb.slice(0,10))
    const [date_e,setDate_e]=useState(date.slice(0,10))
    const [name,setName]=useState(line.TEHNOLOGII_NAME_DL)
    const [count,setCount]=useState(line.SOST_KOL)
    const [code,setCode]=useState(line.SOST_KOD_PR)
    const [usl,setUsl]=useState(line.SOST_KOD_KMU)

    const Ch_code=(e)=>{
        setCode(e.target.value)
    }

    const Ch_Name=(e)=>{
        setName(e.target.value)
    }

    const Ch_count=(e)=>{
        setCount(e.target.value)
    }

    const Ch_dat_e=(e)=>{
        setDate_e(e.target.value)
    }

    const Ch_dat_b=(e)=>{
        setDate_b(e.target.value)
    }

    const Closes=()=>{
        props.upd()
        }
        console.log(props.act_id)
    const Sent=()=>{
        const data={
            SOST_KOD_PR:code,
            SOST_DAT_B:date_b,
            SOST_DAT_E:date_e,
            SOST_KOL:count,
            SOST_VIBOR:line.SOST_VIBOR,
            SOST_ID:line.SOST_ID
        }
        axios.post('/prejsk/updateSost',{data}).then(res=>{{props.setMessageShow('Запись отредактирована',2)}});
        Closes();
    }
return(
    <div className='global_pos'>{console.log(line)}
<div className='global_pos_two'>
            <div className='tre sd'>
                <div className='f'>
            <p>Комплексная услуга</p>
           <textarea  value={usl}></textarea>
            </div>
        <div className='f'>
            <p>Код</p>
            <textarea onChange={Ch_code} value={code}> </textarea>
        </div>
        <div className='f'>
            <p>Наименование</p>
            <textarea className='naim' onChange={Ch_Name}  value={name}></textarea>
        </div>
        <div className='f'>
            <p>Количество</p>
            <textarea onChange={Ch_count} value={count}></textarea>
        </div>
        <div className='f'><p>Дата начала действия</p>
            <input className='selections' onChange={Ch_dat_b}  type='date' value={date_b}/>
        </div>
        <div className='f'><p>Дата окончания действия</p>
            <input className='selections' onChange={Ch_dat_e} type='date' value={date_e}/>
            </div>
            <div >
                <button className='ext_but' onClick={Sent}>Send</button>
                <button  className='ext_but' onClick={Closes}>Closes</button>
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

export default connect(pushStateToProps,pushDispatchToProps) (Update);
