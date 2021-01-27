const Initial ={
    obj_sost:[]
}

export const tableReduccer = (state=Initial,action)=>{
    console.log(action)
    switch (action.type){
        case 'ADD_SOST_KMU': return {...state, obj_sost:action.payload}
        default: return state;
    }
}
