import React, { useState } from 'react'
import './App.scss'
import {v4 as ui} from 'uuid'
import AddNew from './Sost_KMU/AddNew'
import Update from './Sost_KMU/updat'
import axios from 'axios'
import {connect} from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import {setMessageShow} from './store/message/action'
function TableNapTwo(props){

    const [add,setAdd]=useState(false)
    const [upd,setUpd]=useState(false)
    const [act_id,setAct_id]=useState({})
    const [style,setStyle]=useState(false)

    let data=props.table_sost
    let st=(style!==false)?' st2':''
    const AddLine=(id)=>{
      setAdd(!add)
    }

    
    const Change_st=()=>{
      setStyle(!style)
    }


    const UdpadeLine=(id)=>{
      setUpd(!upd)
      setAct_id(id)
    }

    const Delete_kmu=(id)=>{
      const data={
        sost_id:id.SOST_ID
      }
      axios.post('/prejsk/deleteSost',{data}).then(res=>
        {{props.setMessageShow('Запись удалена',0)}});
    }
return(
        <>{data.map(id=><tr className={st} onChange={Change_st} key={ui()} >
         <td>{id.SOST_KOD_PR}</td>
         <td className='th6'>{id.SOST_KOL}</td>   
         <td >{id.TEHNOLOGII_NAME_DL}</td> 
         <td><DeleteIcon onClick={()=>Delete_kmu(id)}>Удалить</DeleteIcon></td>
         <td><AddIcon onClick={()=>AddLine(id)}>Добавить</AddIcon></td>  
         <td><CreateIcon onClick={()=>UdpadeLine(id)}>Редактировать</CreateIcon></td>
        </tr>)}
        {add && <AddNew add={AddLine} datar={data}/>}
        {upd &&<Update upd={UdpadeLine} act_id={act_id}/>}

        </>
)
}

const pushStateToProps = (state) => {
    return{
      table_sost:state.table_sost.obj_sost
    };
  };
  const pushDispatchToProps = {
    setMessageShow
  };
  


export default connect(pushStateToProps,pushDispatchToProps) (TableNapTwo);