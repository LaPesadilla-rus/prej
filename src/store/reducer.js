import {combineReducers} from 'redux'
import {tableReduccer} from './table/reducer'
import {AllTable} from './sec_table/reducer'
import {loaderReducer} from './preload/reducer'
import {messageReducer} from './message/reducer'

export default combineReducers({
    table_sost: tableReduccer,
    all_table:AllTable,
    message: messageReducer,
    loader: loaderReducer,
    
    
})