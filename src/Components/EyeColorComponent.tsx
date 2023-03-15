import { Box, Button } from '@mui/material';
import React from 'react'
import Dropdown from '../FormActions/Dropdown';
import { OperandsDropdownMap } from '../Static.types';
import { labelstyles, textstyles } from './ContryComponent';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';



function EyeColorComponent( props:{
  OprendIndex?: any,
  OprendType?: any,
  OprendExpression?: any,
  setIndexStateCallBack: any,
  expressionId: any,
}
) {


// console.log("props recived in EyeColorComponent : "+ JSON.stringify(props))

    //  CallBackfuntion to update the currentState
    function parentCallBackToRemoveOperand(){
      console.log("calling parent!!! from Eye Color Component")
  
        //  console.log("Index is : " + props.OprendIndex, "type: "+ JSON.stringify(props.OprendType), "Expression ID: "+ props.expressionId, "with Oparend Vales: "+ JSON.stringify(props.OprendExpression));
        //  console.log("curend Oprend state:"+ props.OprendExpression )
        //  if(props.setIndexStateCallBack != null){
             props.setIndexStateCallBack(props.OprendIndex, props.OprendType, props.expressionId, props.OprendExpression, 'Remove','');
        //  }
    }

    function parentCallBackToUpdatetheValue( newValue: string){
          
      console.log("NewValue recived in country "+ newValue)
       props.setIndexStateCallBack(props.OprendIndex,'null', props.expressionId, newValue, 'UpdateOperandValue','');

    }

  return (
    // <div>EyeColorComponent</div>


    <div className="flexbox-container-contry">
       
    <div className="flexbox-item flexbox-side-label">
    <div className="flex-label-containor">
    <div className="flexbox-item flexbox-items-text">
    <Box sx={labelstyles}>
    <Box sx={{display: 'flex', flexDirection: 'column', p:1, mb:1}}>
        <code>Eye</code> 
        <code> Color</code> 
        </Box>

    </Box>
    </div>

    </div>

    </div>
  
    <div className="flexbox-item flexbox-item-7">    

    <div className="flex-text-containor">
    <div className="flexbox-item flexbox-items-text"> 
    <Box sx={textstyles}>
      Select a eye color for the breed :
    </Box>  
    </div>
      
    </div>
    
    </div>

    <div className="flexbox-item flexbox-item-7a">
      
      <div className="flex-button-containor">
        <div className="flexbox-item flexbox-item-dropdown">
        <Dropdown placeholder={'Eye Color'} OperationList={OperandsDropdownMap.EyeColor}
             value={props.OprendType} CallBackfuntion={parentCallBackToUpdatetheValue}/>

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

export default EyeColorComponent