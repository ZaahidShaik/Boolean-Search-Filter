import * as React from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import { Padding } from '@mui/icons-material';


declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
      dashed: true;
    }
  }

  const SelectTheme = createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'dashed' },
            style: {
              textTransform: 'none',
              border: `2px dashed ${"#c6ccd2"}`,
              color: "#c6ccd2",
              borderWidth: 2,

            },
          }
    ]}}});





function SelectCard(
    props:{
        OprendIndex: any,
        OprendType?: any,
        OprendExpression?: any,
        setIndexStateCallBack: any,
        expressionId: any,
    }) {
           
        // console.log("Props in SelectCard"+ JSON.stringify(props));

        function parentCallback(index: number) {
            
            console.log("Oprend Index is : " + index, "type: "+ JSON.stringify(props.OprendType), "Expression Index: " + props.expressionId);
            console.log("curend Oprend state:"+ JSON.stringify(props.OprendExpression), )
            if(props.setIndexStateCallBack != null){
                props.setIndexStateCallBack(index, props.OprendType, props.expressionId, props.OprendExpression,'','');
            }
            
            console.log("check in card")
          }



const selectButtonStyles ={  
   m: 3, 
   width: "600px", 
   heigh: "400px",
   fontSize: 18, 
   fontWeight: 'medium', 
   p:1,             
 }
    
  return (
    <ThemeProvider theme={SelectTheme}>
    <div className="flexbox-container-4" key={+props.OprendIndex+props.expressionId }>
    <Button variant="dashed" onClick={() => parentCallback(props.OprendIndex)} sx={selectButtonStyles} size='large'>
        Click and select expression or catgory to add in the expression...
    </Button>
    </div>
    </ThemeProvider>
  )
}

export default SelectCard