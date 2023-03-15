import React from 'react'
import SimpleCard from '../Utility/SimpleCard'
import { Box, Button } from '@mui/material';
import Dropdown from '../FormActions/Dropdown';
import '../Styles/ContryComponentStyles.css';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { OperandsDropdownMap } from '../Static.types';

const labeltyles ={
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',
  display: 'inline',
  fontFamily: 'Monospace'
}

const textstyles ={ 
  color: 'white',
  fontSize: 20,
  fontWeight: 'medium',
  display: 'inline',
}

function ColorComponent(
  props:{
    OprendIndex?: any,
    OprendType?: any,
    OprendExpression?: any,
    setIndexStateCallBack: any,
    expressionId: any,
  }
) {


  console.log("props recived in Color component: "+ JSON.stringify(props))

  let setColor: any
  //  CallBackfuntion to update the currentState
  function parentCallBackToRemoveOperand(){
    console.log("calling parent!!! from Color Component")

       console.log("Index is : " + props.OprendIndex, "type: "+ JSON.stringify(props.OprendType), "Expression ID: "+ props.expressionId, "with Oparend Vales: "+ JSON.stringify(props.OprendExpression));
       console.log("curend Oprend state:"+ props.OprendExpression )

           props.setIndexStateCallBack(props.OprendIndex, props.OprendType, props.expressionId, props.OprendExpression, 'Remove','');

  }

  function parentCallBackToUpdatetheValue( newValue: string){
          
    setColor = newValue;
    console.log("NewValue recived in Color "+ newValue)
     props.setIndexStateCallBack(props.OprendIndex,'null', props.expressionId, newValue, 'UpdateOperandValue','');

  }


  return (
    // <div>ColorComponent</div>
    <div className="flexbox-container-contry">
       
    <div className="flexbox-item flexbox-side-label">
    <div className="flex-label-containor">
    <div className="flexbox-item flexbox-items-text">
    <Box sx={labeltyles}>
      <code>Color</code> 
    </Box>
    </div>

    </div>

    </div>
  
    <div className="flexbox-item flexbox-item-7">    

    <div className="flex-text-containor">
    <div className="flexbox-item flexbox-items-text"> 
    <Box sx={textstyles}>
      Select from common colors of the breed :
    </Box>  
    </div>
      
    </div>
    
    </div>

    <div className="flexbox-item flexbox-item-7a">
      
      <div className="flex-button-containor">
        <div className="flexbox-item flexbox-item-dropdown">
        <Dropdown placeholder={'Fur Color'} OperationList={OperandsDropdownMap.FurColor} 
             value={setColor} CallBackfuntion={parentCallBackToUpdatetheValue}/>
        </div>
      </div>
      
      </div>


    <div className="flexbox-item flexbox-action-center">

    <div className="flex-button-containor">
        <div className="flexbox-item flexbox-item-delete">
        <Button onClick={parentCallBackToRemoveOperand}><DeleteOutlinedIcon /></Button>
        </div>
      </div>
    </div>
  
   </div>
  )
}

export default ColorComponent