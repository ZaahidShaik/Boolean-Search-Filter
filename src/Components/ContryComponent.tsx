import { Box, Button } from '@mui/material';
import React from 'react'
import Dropdown from '../FormActions/Dropdown';
import { OperandsDropdownMap } from '../Static.types';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// import '../Styles/ExpressionBuilder.css'; 
import '../Styles/ContryComponentStyles.css';

export const labelstyles ={
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',
  display: 'inline',
  fontFamily: 'Monospace'
}

export const textstyles ={ 
  color: 'white',
  fontSize: 20,
  fontWeight: 'medium',
  display: 'inline',
  fontFamily: 'Monospace' }

function ContryComponent(  
  props:{
  OprendIndex?: any,
  OprendType?: any,
  OprendExpression?: any,
  setIndexStateCallBack: any,
  expressionId: any,
}
) {


console.log("props recived in Contry Component : "+ JSON.stringify(props))

    //  CallBackfuntion to update the currentState
    function parentCallBackToRemoveOperand(){
      console.log("calling parent!!! from Contry Component")
  
        //  console.log("Index is : " + props.OprendIndex, "type: "+ JSON.stringify(props.OprendType), "Expression ID: "+ props.expressionId, "with Oparend Vales: "+ JSON.stringify(props.OprendExpression));
        //  console.log("curend Oprend state:"+ props.OprendExpression )

             props.setIndexStateCallBack(props.OprendIndex, props.OprendType, props.expressionId, props.OprendExpression, 'Remove','');

    }

    function parentCallBackToUpdatetheValue( newValue: string){
          
      console.log("NewValue recived in country "+ newValue)
       props.setIndexStateCallBack(props.OprendIndex,'null', props.expressionId, newValue, 'UpdateOperandValue','');

    }

  return (
    // <div>ContryComponent</div>

    <div className="flexbox-container-contry">
       
    <div className="flexbox-item flexbox-side-label">
    <div className="flex-label-containor">
    <div className="flexbox-item flexbox-items-text">
    <Box sx={labelstyles}>
      <code>Contry</code> 
    </Box>
    </div>

    </div>

    </div>
  
    <div className="flexbox-item flexbox-item-7">    

    <div className="flex-text-containor">
    <div className="flexbox-item flexbox-items-text"> 
    <Box sx={textstyles}>
      Select a country where the breed is found the most :
    </Box>  
    </div>
      
    </div>
    
    </div>

    <div className="flexbox-item flexbox-item-7a">
      
      <div className="flex-button-containor">
        <div className="flexbox-item flexbox-item-dropdown">
        <Dropdown placeholder={'Country of Origins'} OperationList={OperandsDropdownMap.CountryOfOrigins} 
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

export default ContryComponent