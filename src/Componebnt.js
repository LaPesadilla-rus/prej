import {useState} from 'react'
import FormCreate from './Buttons/formCreate'
import AddIcon from '@material-ui/icons/Add';
import FindReplaceIcon from '@material-ui/icons/FindReplace';
import {connect} from 'react-redux';

function Component(props){
    
    const [create,setCreate]=useState(false)

    const CreateNewLine=()=>{
            setCreate(!create)
        }


    return(
        <div className=' marg'>
            <AddIcon className='but' onClick={CreateNewLine} ></AddIcon>
            <FindReplaceIcon  className='but' ></FindReplaceIcon>
            {create&& <FormCreate   newRow={CreateNewLine}/>}
         </div>
        )    
    }

const pushStateToProps = (state) => {
    return{
    all_table:state.all_table.obj_table};
  };

const pushDispatchToProps = {
   };

export default connect(pushStateToProps,pushDispatchToProps) (Component);