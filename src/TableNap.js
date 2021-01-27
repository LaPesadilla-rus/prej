import React, { useState } from 'react'
import './App.scss'
import axios from 'axios'
import {setMessageShow} from './store/message/action'
import {connect} from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';

function TableNap(props){

    const [style,setStyle]=useState(false)
   
    //console.log(props.row)
    let data=props.row
    let cl=(data.TEHNOLOGII_TIP===1)?'typ1 th5':(data.TEHNOLOGII_TIP===4)?'typ2 th5':(data.TEHNOLOGII_TIP===3)?'typ3 th5':'typeel th5'
    let st=(style!==false)?' st1':''

const DeleteRow=()=>{
    const data={
        guid:props.row.GUID
    }
    axios.post('/prejsk/deleteTeh',{data}).then(res=>
        {{props.setMessageShow('Запись удалена',0)}});
}

const setAdd=()=>{
    props.setAllTable(props.row)
    props.setAddSost(props.row.sost)
    setStyle(!style)
}

//console.log('tablenap')
    return(
        <tr onClick={setAdd} className={st}>
            <td>{data.TEHNOLOGII_TEH}</td>
            <td >{data.TEHNOLOGII_CENA}</td>
            <td className={cl}>{data.TEHNOLOGII_TIP}</td>
            <td>{data.TEHNOLOGII_NAME_DL}</td>
            <td><DeleteIcon onClick={DeleteRow} className='but' ></DeleteIcon></td>
        </tr>
        
)
}


const pushStateToProps = (state) => {
    return{
     
    };
  };
  const pushDispatchToProps = {
    setMessageShow
  };
  


export default connect(pushStateToProps,pushDispatchToProps) (TableNap);