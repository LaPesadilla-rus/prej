import './App.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TableNap from './TableNap.js'
import {v4 as ui} from 'uuid'
import TableNapTwo from './TableNapTwo'
import {setAddSost } from './store/table/action';
import {connect} from 'react-redux';
import {setAllTable} from './store/sec_table/action'
import {setLoaderShow, setLoaderHide} from './store/preload/action'
import Animation from './animation/animation'
import Component from './Componebnt'
import Filter from './filter'
import Message from './message/message'


axios.defaults.baseURL = 'http://localhost:4000/api/';

function App(props) {
  
  const [mainTab,setMainTab]=useState([])
  const [filtr,setFiltr]=useState(false)
  

  let daet=new Date()
  let mn=daet.getMonth()+1
    if (mn<=9){mn='0'+mn}

    useEffect(()=>{
    
     Loader();
    
    },[])

 
    const Filter_go=()=>{
      setFiltr(!filtr)
    }


    const Loader=async()=>{
      let datas= daet.getFullYear()+'-'+mn+'-'+daet.getDate()
    let data={}
      if(datas!==''){
        data.data=datas
     }
      props.setLoaderShow();
      await axios.post('/prejsk/all',{data}).then(res=>{
        setMainTab(res.data.all)
        }
      )
      props.setLoaderHide()
    }
  
  return (
    <div>{props.loader_state && <Animation />}{console.log(props)}
    <div className='App-header ' >
    { (filtr===true)? < Filter setMainTab={setMainTab} out={Filter_go} />:<button onClick={Filter_go} title='Нажмите для работы с фильтром' className='bt_fl'></button>}
        <div className='more_table '>
          <div >
            {(setAllTable.length>0) &&  <Component  all_table={props.all_table} setAllTable={props.setAllTable} className='marg'/>}
              <div className='fortablr marg'>
              
                <table>
                  <thead>
                    <tr>
                      <th className='th1'>Код</th>
                      <th className='th2'>Цена</th>
                      <th className='th3'>Тип</th>
                      <th className='th4'>Наименование</th>
                      <th className='th3'></th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr className='velo'><td></td><td></td><td></td><td></td></tr>
                  {(mainTab.length > 0) && mainTab.map(id=> <TableNap key={ui()} row={id}  setAddSost={props.setAddSost} setAllTable={props.setAllTable}/>)}
                  </tbody>
               </table>
              </div>
            <div>
          </div>
        </div>
        <div >
            <div>
              <div className='sim'>
                <div className='fortablr'>
                  <table>
                    <thead>
                      <tr>
                        <th className='th1'>Код</th>
                        <th className='th5'>Количество</th>
                        <th className='th7'>Наименование</th>
                        <th className='th6'></th>
                        <th className='th6'></th>
                      </tr>
                    </thead>
                    <tbody >
                      <tr className='velo'><td></td><td></td><td></td><td></td></tr>
                      <TableNapTwo key={ui()} kmu={props.table_sost} />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
      </div>
      {props.message_state && <Message /> }
    </div>
    </div>
  );
}

const pushStateToProps = (state) => {
  return{ 
    loader_state:state.loader.loader_state,
    message_state:state.message.message_state
  };
};

const pushDispatchToProps = {
  setAddSost,setAllTable,setLoaderHide, setLoaderShow
};

export default connect(pushStateToProps,pushDispatchToProps) (App);
