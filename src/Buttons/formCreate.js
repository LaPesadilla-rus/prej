import React, { useEffect, useState } from 'react'
import './Buttons.scss'
import {connect} from 'react-redux';
import axios from 'axios'
import {setMessageShow} from '../store/message/action'
import Addnew from '../Sost_KMU/AddNew'

function FormCreate(props){

const SoClose=()=>{
    props.newRow()
}

let initState = {
    priem: '',
    vid: '',
    punkt:'',
    type:''
    }

let data = props.all_table
const [state, setState] = useState(initState)
const [code_teh,setCode_teh]=useState(data.TEHNOLOGII_TEH)
const [guid,setGuid]=useState(data.GUID)
const [cena,setCena]=useState(data.TEHNOLOGII_CENA)
const [old_cena, setOld_cena]=useState(data.TEHNOLOGII_CENA_OLD)
const [num,setNum]=useState(data.TEHNOLOGII_N_PRESK)
const [nds,setNds]=useState(data.TEHNOLOGII_NDS)
const [adres,setAdres]=useState(data.TEHNOLOGII_ADRES)
const [koef,setKoef]=useState(data.KOEF)
const [obozn,setObozn]=useState(data.TEHNOLOGII_KOD)
const [dialab,setDialab]=useState(data.DIALAB_KOD)
const [palat,setPalat]=useState(data.REZ_INT3)
const [cena_dia,setCena_dia]=useState(data.DIALAB_CENA)
const [cena_dia_med,setCena_dia_med]=useState(data.DIALAB_CENA_MS)
const [an,setAn]=useState(data.ANALOG_RASPRED)
const [name,setName]=useState(data.TEHNOLOGII_NAME_DL)
const [dataB,setDataB]=useState(data.TEHNOLOGII_DATA_BEG.slice(0,10))
const [dataE,setDataE]=useState(data.TEHNOLOGII_DATA_END.slice(0,10))
const [kmuadd,setKmuadd]=useState(false)

let daet=new Date()
  let mn=daet.getMonth()+1
    if (mn<=9){mn='0'+mn}

useEffect(()=>{
  setState(
      { ...state, 
            priem: props.all_table.TEHNOLOGII_PRIEM,
            vid:props.all_table.TEHNOLOGII_VID,
            type:props.all_table.TEHNOLOGII_TIP,
            punkt:props.all_table.TEHNOLOGII_PUNKT
    })
},[])

const Change_Vid=(e)=>{
    setState({...state,vid:e.target.value})
}

const Change_Priem=(e)=>{
    setState({...state,priem:e.target.value})
}
const Change_Type=(e)=>{
    setState({...state,type:e.target.value})
}
const Change_Punkt=(e)=>{
    setState({...state,punkt:e.target.value})
}

const Kmu=()=>{
    setKmuadd(!kmuadd)
  }

  const OnReboot=()=>{
    let datas= daet.getFullYear()+'-'+mn+'-'+daet.getDate()
    let data={}
      if(datas!==''){
        data.data=datas
     }

     axios.post('/prejsk/all',{data}).then(res=>{
       
        }
      )

  }

const Priem=[
    {id:1,type:'В полик.'},
    {id:2, type:'На дому'}
]   

const Tip=[
    {id:1,type:'Простая мед.услуга'},
    {id:3, type:'Комплексная мед.услуга'},
    {id:4, type:'Медицинский осмотр'},
    {id:5, type:'Прочая мед.услуга'}
]  

const Punkt=[
    {kod:1,tabl:'Таблица № 1'},
    {kod:2,tabl:'Таблица № 2'},
    {kod:3,tabl:'Таблица № 3'},
    {kod:4,tabl:'Таблица № 4'},
    {kod:10,tabl:'Документы'},
    {kod:11,tabl:'Таблица № 1.1'},
    {kod:12,tabl:'Таблица № 1.2'},
    {kod:21,tabl:'Таблица № 2.1'},
]

const Vid=[
    {kod:0, vid:'Диагност. и лечение'},
    { kod:1, vid:'Мед. осмотры'},
    { kod:2, vid:'Курсовое лечение'},
    { kod:3, vid:'Прививки'},
]


const Code_Change=(e)=>{
    setCode_teh(e.target.value)
}

const Cena_Change=(e)=>{
    setCena(e.target.value)
}

const OldCena_Change=(e)=>{
    setOld_cena(e.target.value)
}

const Num_Change=(e)=>{
    setNum(e.target.value)
}

const Nds_Change=(e)=>{
    setNds(e.target.value)
}

const Adres_ch=(e)=>{
    setAdres(e.target.value)
}

const Koef_ch=(e)=>{
    setKoef(e.target.value)
}

const Obozn_ch=(e)=>{
    setObozn(e.target.value)
}

const Dialab_ch=(e)=>{
    setDialab(e.target.value)
}

const Palat_ch=(e)=>{
    setPalat(e.target.value)
}

const Dial_cena_ch=(e)=>{
    setCena_dia(e.target.value)
}

const Dial_cenam_ch=(e)=>{
    setCena_dia_med(e.target.value)
}

const An_ch=(e)=>{
    setAn(e.target.value)
}

const Name_ch=(e)=>{
    setName(e.target.value)
}

const guid_ch=(e)=>{
    setGuid(e.target.value)
}

const Closes=()=>{
    props.newRow()
}

let vs = (state.type===3)?'vs':'nvs';

const Sent =()=>{
    let data={
        TEHNOLOGII_TEH:code_teh,
        TEHNOLOGII_CENA:cena,
        TEHNOLOGII_CENA_OLD:old_cena,
        TEHNOLOGII_PRIEM:state.priem,
        TEHNOLOGII_VID:state.vid,
        TEHNOLOGII_NAME:name,
        TEHNOLOGII_NAME_DL:name,
        TEHNOLOGII_PUNKT:state.punkt,
        TEHNOLOGII_N_PRESK:num,
        TEHNOLOGII_ZENA_3:null,
        TEHNOLOGII_ZENA_4:null,
        TEHNOLOGII_TIP:state.type,
        TEHNOLOGII_NDS:nds,
        TEHNOLOGII_ADRES:adres,
        TEHNOLOGII_DATA_BEG:dataB,
        TEHNOLOGII_DATA_END:dataE,
        REZ_FL1:null,
        REZ_FL2:null,
        REZ_FL3:null,
        REZ_FL4:null,
        REZ_INT1:0, // хз
        REZ_INT2:0, //хз
        REZ_INT3:palat,
        REZ_INT4:0,
        KOEF:koef,
        TEHNOLOGII_KOD:obozn,
        GUID:guid,
        KOD_ROFOMS:obozn,
        DIALAB_KOD:dialab,
        DIALAB_CENA:cena_dia,
        DIALAB_CENA_MS:cena_dia_med,
        ANALOG_RASPRED:an
    }
    axios.post('/prejsk/addTeh',{data}).then(res=>{
       
        props.setMessageShow('Запись добавлена',1)})
    
    Closes()
    OnReboot()
}



const Upd=()=>{
    let data={
        TEHNOLOGII_TEH:code_teh,
        TEHNOLOGII_CENA:cena,
        TEHNOLOGII_CENA_OLD:old_cena,
        TEHNOLOGII_PRIEM:state.priem,
        TEHNOLOGII_VID:state.vid,
        TEHNOLOGII_NAME:name,
        TEHNOLOGII_NAME_DL:name,
        TEHNOLOGII_PUNKT:state.punkt,
        TEHNOLOGII_N_PRESK:num,
        TEHNOLOGII_ZENA_3:null,
        TEHNOLOGII_ZENA_4:null,
        TEHNOLOGII_TIP:state.type,
        TEHNOLOGII_NDS:nds,
        TEHNOLOGII_ADRES:adres,
        TEHNOLOGII_DATA_BEG:dataB,
        TEHNOLOGII_DATA_END:dataE,
        REZ_FL1:null,
        REZ_FL2:null,
        REZ_FL3:null,
        REZ_FL4:null,
        REZ_INT1:0, // хз
        REZ_INT2:0, //хз
        REZ_INT3:palat,
        REZ_INT4:0,
        KOEF:koef,
        TEHNOLOGII_KOD:obozn,
        GUID:guid,
        KOD_ROFOMS:obozn,
        DIALAB_KOD:dialab,
        DIALAB_CENA:cena_dia,
        DIALAB_CENA_MS:cena_dia_med,
        ANALOG_RASPRED:an
    }
    axios.post('/prejsk/updTeh',{data}).then(res=>{ props.setMessageShow('Изменения внесены',2)})
    Closes();
}

const Data_B_ch=(e)=>{
    setDataB(e.target.value)
}

const Data_E_ch=(e)=>{
    setDataE(e.target.value)
}


return(
    <div className='global_pos'>
        <div className='global_pos_two'>
            <div className='tre'>
                <div className='f'>
                    <p>Код</p>
                        <textarea onChange={Code_Change} value={code_teh}></textarea>
                    <p>Цена</p>
                        <textarea onChange={Cena_Change} value={cena}></textarea>
                    <p>Цена старая</p>
                        <textarea onChange={OldCena_Change} value={old_cena}></textarea>
                    <p>Прием</p>
                        <select className='selections' onChange={Change_Priem} value={state.priem}>
                        {Priem.map(id=><option key={id.id} value={id.id}>{id.type}</option>)}
                        </select>
                </div>
                <div className='f'>
                    <p>Вид</p>
                        <select className='selections' onChange={Change_Vid} value={state.vid}>
                        {Vid.map(id=><option key={id.kod} value={id.kod}>{id.vid}</option>)}
                        </select>
                    <p>Пункт</p>
                        <select className='selections' onChange={Change_Punkt} value={state.punkt}>
                        {Punkt.map(id=><option key={id.kod} value={id.kod}>{id.tabl}</option>)}
                        </select>
                    <p>Номер прейск</p>
                        <textarea onChange={Num_Change} value={num}></textarea>
                    <p>Тип</p>
                        <select className='selections' onChange={Change_Type}value={state.type}>
                        {Tip.map(id=> <option key={id.id} value={id.id}>{id.type}</option>)}
                        </select>
                </div>
                <div className='f'>
                    <p>НДС</p>
                        <textarea onChange={Nds_Change} value={nds}></textarea>
                    <p>Адрес</p>
                        <textarea className='name_text' onChange={Adres_ch} value={adres}></textarea>
                    <p>Коэф</p>
                        <textarea onChange={Koef_ch} value={koef}></textarea>
                    <p>Обозн</p>
                        <textarea onChange={Obozn_ch} value={obozn}></textarea></div>
                <div className='f'>
                    <p>Дата начала действия</p>
                        <input className='selections' type='date' value={dataB} onChange={Data_B_ch}/>
                    <p>Дата конца действия</p>
                        <input className='selections' type='date' value={dataE} onChange={Data_E_ch}/>
            </div> 
            <fieldset>
            <legend>Принадлежность услуги</legend>
                <input name='hell' type='radio' id='sim'/>
                    <label for="sim">Обычная</label>
                <input name='hell' type='radio' id='chup'/>
                    <label for="chup">Check-up</label>
                <input name='hell' type='radio' id='ref'/>
                    <label for="ref">Рефлексотерапия</label>
                <input name='hell' type='radio' id='at'/>
                    <label for="at">Аттестация</label>
                <input name='hell' type='radio' id='ph'/>    
                    <label for="ph">Психоосвидетельствов.</label>
            </fieldset>
            <div className='f'>
            <p>Код Диалаб</p>
                <textarea onChange={Dialab_ch} value={dialab}></textarea>
            <p>Тип палаты</p>
                <textarea onChange={Palat_ch} value={palat}></textarea>
                <input type='checkbox'id='diap'/>
                    <label for='diap'>По диапазону дат</label>
                <input type='checkbox' id='spo'/>
                    <label for='spo'>Спортивная медицина</label>
            </div>
            <div className='f'>
                <p>Цена Диалаб</p>
                    <textarea onChange={Dial_cena_ch} value={cena_dia}></textarea>
                <p>Цена Диалаб М/С</p>
                    <textarea onChange={Dial_cenam_ch} value={cena_dia_med}></textarea>
            </div>
            <div className='f'>
                <p>Код строки аналога</p>
                    <textarea onChange={An_ch} value={an}></textarea>
            </div>
            <div className='f'>
                <p>Наименование</p>
                    <textarea onChange={Name_ch} value={name} className='name_full'></textarea>
                    <textarea onChange={guid_ch} value={guid}></textarea>
            </div>
            <button className={vs} onClick={Kmu}>Добавить услугу</button>
            <div>
            <button className='ext_but' onClick={Sent}>Добавить</button>
            <button className='ext_but' onClick={Upd}>Изменить</button>
            <button className='ext_but' onClick={SoClose}>Выход</button></div></div>
            </div>
            { kmuadd &&<Addnew add={Kmu}/>}
        </div>
    )
}



const pushStateToProps = (state) => {
    return{
        all_table:state.all_table.obj_table
    };
  };

  const pushDispatchToProps = {
    setMessageShow
  };

export default connect(pushStateToProps,pushDispatchToProps) (FormCreate);