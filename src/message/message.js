
import React, { useEffect, useState } from 'react'
import './message.scss'
import {connect} from 'react-redux'
import {setMessageHide} from '../store/message/action'

function Message (props){

    const [act,setAct]=useState(false)

    const Timer =()=>{
        setTimeout(() => {
            setAct(true)
        }, 200);
        setTimeout(() => {
            props.setMessageHide()
        }, 3000);
    }

    useEffect(()=>{
        Timer()
    },[])

    let color=''
    switch (props.messageStore.color){
        case 0 : color = 'delete'; break;
        case 1 : color = 'insert'; break;
        case 2 : color = 'update'; break;
        default: color = 'oops';
    }

    return(
        <div className={color + ` Window ` + ((act)? ` Move `:null)}>
            <label>{props.messageStore.txt}</label>
        </div>
    )
}

const pushDispatchToProps={
    setMessageHide
}

export default connect(
    state=>({
        messageStore: state.message
    }),
    
    pushDispatchToProps)(Message)