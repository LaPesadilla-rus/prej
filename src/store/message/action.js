export const MESSAGE_SHOW='MESSAGE_SHOW';
export const MESSAGE_HIDE='MESSAGE_HIDE';

export const setMessageShow=(val,color)=>({
    type:'MESSAGE_SHOW',
    payload:true,
    txt:val,
    color:color
});

export const setMessageHide=()=>({
    type:'MESSAGE_HIDE',
    payload:false,
    txt:''
})