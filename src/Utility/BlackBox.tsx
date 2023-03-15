import React from 'react'
import '../Styles/ExpressionBuilder.css'; 
import Box from '@mui/material/Box';
import { Divider, Stack } from '@mui/material';
import SimpleCard from './SimpleCard';

function BlackBox() {
  return (


      <div className="flexbox-container-5">
       
       <div className="flexbox-item flexbox-item-1">1 AND</div>

       <div className="flexbox-item flexbox-item-2">
       2 <OprendFlexBox/>
       </div>
             


      </div>
     


  )
}

export default BlackBox
const content = (
  <Box sx={{ fontSize: 'sm', color: 'text.tertiary' }}>
    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
 Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
 Sed malesuada lobortis pretium.`}
  </Box>
);

function OprendFlexBox(){
  return (
    <div className="flexbox-container-4">
       
    <div className="flexbox-item flexbox-item-4">4</div>
  
    <div className="flexbox-item flexbox-item-5"> 5<CatagoryBox/></div>

    <div className="flexbox-item flexbox-item-5"> 5
      <OperatorBox/>
      </div>
    
      <div className="flexbox-item flexbox-item-5"> 5
      {/* <OperatorBox/> */}
      </div>
  
   </div>
  )

}


function CatagoryBox(){
  return (
    <div className="flexbox-container-3">
       
    <div className="flexbox-item flexbox-item-6">6</div>
  
    <div className="flexbox-item flexbox-item-7">7</div>

    <div className="flexbox-item flexbox-item-6">6</div>
          
  
   </div>
  )

}

function OperatorBox(){
  return (
    <div className="flexbox-container-2">
       
       <div className="flexbox-item flexbox-item-8">8 OR</div>

       <div className="flexbox-item flexbox-item-9">9<OprendFlexBox2/></div>

   </div>
  )

}

function OprendFlexBox2(){
  return (
    <div className="flexbox-container-4">
       
    <div className="flexbox-item flexbox-item-4">4</div>
  
    <div className="flexbox-item flexbox-item-5">5
      <CatagoryBox/>
      </div>
          
  
   </div>
  )

}

function ResizeBox1(){
    return (
        <Box
        sx={{
          // display: 'flex',
          // flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          bgcolor: 'white',
          // overflow: 'hidden', 
          // borderRadius: 3,
          // boxShadow: 2,
          // fontWeight: 'bold',
           



        }}>Hi</Box>
    )
}

function ResizeBox2(){
  return (
      <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'row', md: 'row' },
        alignItems: 'center',
        bgcolor: '#173A5E',
        overflow: 'hidden', 
        borderRadius: 3,
        boxShadow: 2,
        fontWeight: 'bold',

        height: 140,
        width: 900,
      }}>Hi</Box>
  )
}

function ResizeBox3(){
  return (
      <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'row', md: 'row' },
        alignItems: 'center',
        bgcolor: '#173A5E',
        overflow: 'hidden', 
        borderRadius: 3,
        boxShadow: 2,
        fontWeight: 'bold',

        height: 140,
        width: 900,
      }}>Hi</Box>
  )
}
