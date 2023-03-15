import { Box, Button, TextField } from '@mui/material';
import React from 'react'
import Dropdown from '../FormActions/Dropdown';
import '../Styles/ContryComponentStyles.css';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { labelstyles, textstyles } from './ContryComponent';

function HeightComponent( props:{
    OprendIndex?: any,
    OprendType?: any,
    OprendExpression?: any,
    setIndexStateCallBack: any,
    expressionId: any,
  }
  ) {
  
  
//   console.log("props recived in HeightComponent : "+ JSON.stringify(props))
  
      //  CallBackfuntion to update the currentState
      function parentCallBack(){
        console.log("calling parent!!! from HeightComponent")
    
        //    console.log("Index is : " + props.OprendIndex, "type: "+ JSON.stringify(props.OprendType), "Expression ID: "+ props.expressionId, "with Oparend Vales: "+ JSON.stringify(props.OprendExpression));
        //    console.log("curend Oprend state:"+ props.OprendExpression )

               props.setIndexStateCallBack(props.OprendIndex, props.OprendType, props.expressionId, props.OprendExpression, 'Remove','');

      }
  
  return (
    // <div>HeightComponent</div> 

    <div className="flexbox-container-contry">
       
    <div className="flexbox-item flexbox-side-label">
    <div className="flex-label-containor">
    <div className="flexbox-item flexbox-items-text">
    <Box sx={labelstyles}>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <code>Height</code> 
        <code> Range</code> 
        </Box>
    </Box>
    </div>

    </div>

    </div>
  
    <div className="flexbox-item flexbox-item-7">    

    <div className="flex-text-containor">
    <div className="flexbox-item flexbox-items-text"> 
    <Box sx={textstyles}>
      Enter a height range for this breed :
    </Box>  
    </div>
      
    </div>
    
    </div>

    <div className="flexbox-item flexbox-item-7a">
      
      <div className="flex-button-containor">
        <div className="flexbox-item flexbox-item-dropdown">
        <TextField  sx = {{ mt:2, color: '#E38035' }} color = 'primary' 
          label="Size"
          id="standard-size-small"
          defaultValue="Height"
          size="small"
          variant="standard"
        />
        </div>
      </div>
      
      </div>


    <div className="flexbox-item flexbox-action-center">

    <div className="flex-button-containor">
        <div className="flexbox-item flexbox-item-delete">
        <Button onClick={parentCallBack}><DeleteOutlinedIcon /></Button>
        </div>
      </div>
    </div>
  
   </div>
  )
}

export default HeightComponent