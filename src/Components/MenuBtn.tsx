import * as React from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import { green} from '@mui/material/colors'




export const buttonStyles ={
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
 

export const iconStyles = {  
  color: green[500],
}

export const buttonGroupStyle = {
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
  
/*
Catgories to filter on: 

- Contry : string; +
- Color : Strings[]; +
- Hight : { min : number, max: number};
- EyeColor: String[]; +
- Trats : String[]; +
- HealthIssues: String[]; +


*/ 

function MenuBtn(
  ButtonProps: { 
    menuList: any[],
    currentQueryState: any,
    currentExpsState: any,
    clickAction: any,
  }) {

    function parentCallback(oprendName: string) {
      ButtonProps.clickAction('operendType', oprendName );
    }

    return (
      <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup sx={buttonGroupStyle}
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text">

          <Button sx={buttonStyles} startIcon={<AddCircleOutlineTwoToneIcon sx={iconStyles}/>} key="Contry" onClick={() => parentCallback('Country')}>Country</Button>
          <Button sx={buttonStyles} startIcon={<AddCircleOutlineTwoToneIcon sx={iconStyles}/>} key="Color" onClick={() => parentCallback('Color')}>Color</Button>
          <Button sx={buttonStyles} startIcon={<AddCircleOutlineTwoToneIcon sx={iconStyles}/>} key="Height" onClick={() => parentCallback('Height')}>Height</Button>
          <Button sx={buttonStyles} startIcon={<AddCircleOutlineTwoToneIcon sx={iconStyles}/>} key="EyeColor" onClick={() => parentCallback('EyeColor')}>EyeColor</Button>
          <Button sx={buttonStyles} startIcon={<AddCircleOutlineTwoToneIcon sx={iconStyles}/>} key="Traits" onClick={() => parentCallback('Traits')}>Traits</Button>
          <Button sx={buttonStyles} startIcon={<AddCircleOutlineTwoToneIcon sx={iconStyles}/>} key="HealthIssues" onClick={() => parentCallback('HealthIssues')}>HealthIssues</Button>

      </ButtonGroup>
    </Box>

    )

}


export default MenuBtn;
