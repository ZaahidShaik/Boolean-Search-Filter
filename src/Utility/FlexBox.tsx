import React from 'react'
import SimpleCard from './SimpleCard'

import '../Styles/FelexBoxCss.css';
import PaperBackground from './PaperBackground';
import OperationsBtnGroup from '../Components/OperationsBtnGroup';
import { Button } from '@mui/material';


declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
      dashed: true;
    }
  }


function GridContainer() {


  return (
      <div className= "grid-container">
          <div className= "grid-iteams grid-iteams-1">
          <SimpleCard/>
          </div>
          
          <div className= "grid-iteams grid-iteams-2">
          <FlexBox1/>
          </div>

          <div className= "grid-iteams grid-iteams-3">
          <FlexBox2/>
          </div>

          <div className= "grid-iteams grid-iteams-4">
          <SimpleCard/>
          </div>

          <div className= "grid-iteams grid-iteams-5">
          <SimpleCard/>
          </div>
          <div className= "grid-iteams grid-iteams-5">

          </div>

    </div>
    

    
  )
}

function FlexBox1() {
    
    
    return (
      <div className="flexbox-container1">
        {/* <div className="flexbox-iteam flexbox-item-1"><OperationsBtnGroup/></div> */}
        <div className="flexbox-iteam flexbox-item-2"><PaperBackground/></div>
        {/* <div className="flexbox-iteam flexbox-item-3"><SimpleCard/></div> */}
      </div>
    )
}

function FlexBox2() {
    
    
    return (
      <div className="flexbox-container2">
        <div className="flexbox-iteam flexbox-item-4"><PaperBackground/></div>
        {/* <div className="flexbox-iteam flexbox-item-5"><SimpleCard/></div> */}
      </div>
    )
}



export default GridContainer