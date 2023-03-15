import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {OperandsDropdownMap} from '../Static.types';
import { Box } from '@mui/material';
import { green } from '@mui/material/colors';
import { useState } from 'react';
import { borderColor } from '@mui/system';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const buttonStyles ={
  fontSize: 18, 
  fontWeight: 'medium', 
    // boxShadow: 3,
    borderRadius: 3,
  color: '#E38035', 
  // textTransform: 'capitalize',
  '&:hover': {
    color: 'white',
    backgroundColor: 'black',
  },
}
 

 const iconStyles = {  
  color: green[500],
}

const buttonGroupStyle = {
  borderRadius: 4,
  boxShadow: 3,
  p: 2,
  color: '#E38035', 
  // gap: 1,
  bgcolor: '#173A5E' ,
  '&:hover': {
    color: 'black',
    // backgroundColor: 'white',
    // borderRadius: 2,
  },
}

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


function Dropdown(
    props:{
        placeholder: string;
        OperationList: Array<string>;
        value: string;
        CallBackfuntion: any;
    }
) { 
      // let value = '';
       const List = props.OperationList;
       const theme = useTheme();
       let selectValue: string = props.value;

       if(selectValue === undefined){
        selectValue = '';
       }

       console.log("this is the props value we got: ", selectValue);

       const [value, setValue] = useState('');

    const handleChange = (event: SelectChangeEvent<typeof value>) => {
        setValue(event.target.value)
        console.log("Selected value:" + event.target.value);
        props.CallBackfuntion(event.target.value);

      };
  
   const SelectStyles = {
    color: 'white', 
    borderRadius: 4,
    // boxShadow: 2,
    minWidth: 3,
    
    // borderColor: 'white',
    bgcolor: '#173A5E' ,
    fontSize: 18, 
    fontWeight: 'medium', 
    '&:hover': {
      color: 'white',
      // backgroundColor: 'black',
    }
   }

   const InputStyle ={
    fontSize: 18, 
    minWidth: 2,
    
    fontWeight: 'medium', 
    mr: 2, 
    bgcolor: '#173A5E' ,
    color: 'white', 
    borderRadius: 3,

    '&:hover': {
      color: 'white',
      backgroundColor: 'black',}
   }

   const DropdownStyle ={
    color: '#E38035', 
    minWidth: 4,
    backgroundColor: '#173A5E',
    // borderColor: 'black',
    '&:hover': {
      color: 'white',
      backgroundColor: 'black',}
   }


  return (

    <Box sx={{ minWidth: 150, boxShadow: 3, width: 'inherit',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center', }}>
    <FormControl fullWidth sx={{  }}>
    {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small"> */}
    <InputLabel id="demo-simple-select-standard-label" sx={InputStyle}>{props.placeholder}</InputLabel>
    <Select
      labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard"
      sx={SelectStyles}
      value={value}
      onChange={handleChange}>

    {List.map((tag:string, id: number) => ( <MenuItem sx={DropdownStyle} key={id} value={tag}>{tag}</MenuItem>))}

    </Select>
    </FormControl>
    </Box>
  )
}

export default Dropdown