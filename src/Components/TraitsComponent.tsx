import { Box, Button } from '@mui/material';
import React from 'react'
import Dropdown from '../FormActions/Dropdown';
import '../Styles/ContryComponentStyles.css';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { labelstyles, textstyles } from './ContryComponent';
import {OperandsDropdownMap} from '../Static.types';
import { buttonStyles } from './MenuBtn';


function TraitsComponent(  props:{
  OprendIndex?: any,
  OprendType?: any,
  OprendExpression?: any,
  setIndexStateCallBack: any,
  expressionId: any,
}
) {


console.log("props recived in TraitsComponent : "+ JSON.stringify(props))

    //  CallBackfuntion to update the currentState
    function parentCallBack(){
      console.log("calling parent!!! from TraitsComponent")
  
        //  console.log("Index is : " + props.OprendIndex, "type: "+ JSON.stringify(props.OprendType), "Expression ID: "+ props.expressionId, "with Oparend Vales: "+ JSON.stringify(props.OprendExpression));
        //  console.log("curend Oprend state:"+ props.OprendExpression )

             props.setIndexStateCallBack(props.OprendIndex, props.OprendType, props.expressionId, props.OprendExpression, 'Remove','');

    }

    function parentCallBackToUpdatetheValue( newValue: string){
          
      console.log("NewValue recived in country "+ newValue)
       props.setIndexStateCallBack(props.OprendIndex,'null', props.expressionId, newValue, 'UpdateOperandValue','');

    }

  return (
    // <div>TraitsComponent</div>

    <div className="flexbox-container-contry">
       
    <div className="flexbox-item flexbox-side-label">
    <div className="flex-label-containor">
    <div className="flexbox-item flexbox-items-text">
    <Box sx={labelstyles}>
      <code>Traits</code> 
    </Box>
    </div>

    </div>

    </div>
  
    <div className="flexbox-item flexbox-item-7">    

    <div className="flex-text-containor">
    <div className="flexbox-item flexbox-items-text"> 
    <Box sx={textstyles}>
      Select a common traits found in the bread :
    </Box>  
    </div>
      
    </div>
    
    </div>

    <div className="flexbox-item flexbox-item-7a">
      
      <div className="flex-button-containor">
        <div className="flexbox-item flexbox-item-dropdown">
        <Dropdown placeholder={'Traits'} OperationList={OperandsDropdownMap.CharacterTraits} 
                     value={props.OprendType} CallBackfuntion={parentCallBackToUpdatetheValue} />
        </div>
      </div>
      
      </div>


    <div className="flexbox-item flexbox-action-center">

    <div className="flex-button-containor">
        <div className="flexbox-item flexbox-item-delete">
        <Button onClick={parentCallBack}><DeleteOutlinedIcon/></Button>
        </div>
      </div>
    </div>
  
   </div>
  )
}

export default TraitsComponent