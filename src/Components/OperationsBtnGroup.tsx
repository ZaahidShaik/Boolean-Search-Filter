import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import OperatorFormBuilder from './OperatorFormBuilder';

import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import { green, red, blue } from '@mui/material/colors'



/*
Create new expresions elements or Edit existing elements when selected: 
- AND operatior,  Operends - 2;
- OR Operator, Operends - 2;
- NOT Operator, Operends - 1;

OnClick pass the create new dom elements(formElements) and create new expression object in the stricture with the operator and the umbe of operends.
*/ 

const buttonStyles ={
  fontSize: 18, 
  borderRadius: 3,
  // boxShadow: 3,
  fontWeight: 'medium', 
  color: '#E38035', 
  textTransform: 'capitalize',
  '&:hover': {
    color: 'white',
    backgroundColor: 'black',
  },
}
 const iconStyles = {
  
  color: green[500],
  p:1,
  // display: 'inline',
}

const buttonGroupStyle = {
  borderRadius: 4,
  boxShadow: 3,
  p: 1,
  color: '#E38035', 
  // gap: 3,
  bgcolor: '#173A5E' ,
  '&:hover': {
    color: 'black',
    // backgroundColor: 'white',
    // borderRadius: 2,
  },
}

function OperationsBtnGroup(props: { queryObject?: any[], setObject: any}){
  

    function parentCallback(queryObject?: any[], expId?: number, operator?: 'AND' | 'OR' | 'NOT',  operendsCount?: number) {
      props.setObject(queryObject, operator, operendsCount);
    }


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup sx={buttonGroupStyle} variant="text" aria-label="text button group">
      <Button sx={buttonStyles} startIcon={<AddCircleOutlineTwoToneIcon sx={{ color: red[500] }}/>} key="AND" onClick={() => parentCallback(props.queryObject,1,'AND',2)}> AND </Button>
      <Button sx={buttonStyles} startIcon={<AddCircleOutlineTwoToneIcon sx={{ color: green[500] }}/>} key="OR" onClick={() => parentCallback(props.queryObject,2,'OR',2)}> OR </Button>
      <Button sx={buttonStyles} startIcon={<AddCircleOutlineTwoToneIcon sx={{ color: blue[500] }}/>} key="NOT" onClick={() => parentCallback(props.queryObject,3,'NOT',1)}> NOT </Button>
      </ButtonGroup>
    </Box>
  )
}

export default OperationsBtnGroup;

