import axios from 'axios'
import React, { useState } from 'react'

function Filter(props){
  let daet=new Date()
      let mn=daet.getMonth()+1
      if (mn<=9){mn='0'+mn}
  const [date,setDate]=useState(daet.getFullYear()+'-'+mn+'-'+daet.getDate())
  const [code,setCode]=useState()
  const [tip,setTip]=useState('')
    const Typer=[
        {id:1,usl:'Простая мед.услуга'},
        {id:2,usl:'Комплексная мед.услуга'},
        {id:3,usl:'Медицинский осмотр'},
        {id:4,usl:'Прочая мед.услуга'},
        {id:5,usl:'Все услуги'}
        ]

    const filter=()=>{
      props.out()
    }
    
    const Choose_date=(e)=>{
      setDate(e.target.value)
    }

    const Num=(e)=>{
      setCode(e.target.value)
    }

    const Uls_ch=(e)=>{
      setTip(e.target.value)
    }

    const Filter_us=()=>
    {
      let data={}
      if(date!==''){
        data.data=date
       }
       if(code!==''){
         data.code=code
       }
       if(tip!==''){
         data.tip=tip
       }
        axios.post('/prejsk/all',{data}).then(res=>{
          props.setMainTab(res.data.all)
         // Filter_date()
      })
    }


return(<>
<div className='sec_back'></div>
<div className='sec'>
<fieldset>
      <legend>Дата ввода в действии</legend>
      <div >
      <input type='date' onChange={Choose_date} value={date}/>
      </div>
      </fieldset>
      <fieldset>
      <legend>Режимы просмотра</legend>
      <div >
        <textarea onChange={Num}></textarea>
      </div>
      </fieldset>
      <fieldset>
       <legend>БД</legend>
       <div>
      <input name='bd' type='radio' id='polik'/>
      <label for='polik' className='for_radio'>Поликлиника</label>
      <input name='bd' type='radio' id='rmz'/>
      <label for='rmz'className='for_radio'>Аксай</label>
      <div>
      </div>
      </div>
      </fieldset>
      <fieldset>
        <legend>Тип услуги</legend>
      <select onChange={Uls_ch} value={tip}>
         {Typer.map(id=><option key={id.id}>{id.id}</option>)}
      </select>
      </fieldset>
      <fieldset>
      <button onClick={Filter_us} title='Применить фильтр'>Применить</button>
      <button className='clFl' title='Скрыть фильтр' onClick={filter}>Скрыть</button>
      </fieldset>
      </div></>
      )
}
export default Filter