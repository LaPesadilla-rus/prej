const Initial ={
    loader_state: false
};

export const loaderReducer =(state = Initial, action)=>{
    switch (action.type){
        case 'LOADER_SHOW': return {...state, loader_state: action.payload};
        case 'LOADER_HIDE': return {...state, loader_state:action.payload};
        default: return state;
    }
}