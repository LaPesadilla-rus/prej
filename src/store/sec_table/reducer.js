const Initial ={
    obj_table:{}
}

export const AllTable=(state=Initial,action)=>{
        console.log(action)
    switch (action.type){
        case 'ALL_TABLE': return {...state,obj_table:action.payload}
        default:return state;
    }
    }