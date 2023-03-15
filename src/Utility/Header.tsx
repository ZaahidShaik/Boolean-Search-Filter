import * as React from 'react';
import { Box, Button, createTheme, Divider, ThemeProvider } from '@mui/material';
import { width } from '@mui/system';


declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
      dashed: true;
    }
  }

  const Theme = createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'dashed' },
            style: {
              textTransform: 'none',
              border: `1px dashed ${"#c6ccd2"}`,
              color: "#c6ccd2",
              fontSize: 12,

            },
          }
    ]}}});


function Header() {

    const HeaderStyles ={  
        m: 1, 
        width: "600px", 
        heigh: "400px",
        fontSize: 35, 
        fontWeight: 'bold',  
        borderRadius: 2,          
      }
         
       return (
         <ThemeProvider theme={Theme}>
         <Button variant="dashed" sx={HeaderStyles} size='large'>
         <code>Boolean Search builder</code> 
         </Button>
         </ThemeProvider>
       )
     }

export default Header





export function StyledLabels( props:{Entry: string, forntsize: number, weight: string}) {

  const TextStyles ={  
    m: 1, 
    width: "600px", 
    heigh: "400px",
    fontSize: props.forntsize, 
    fontWeight: props.weight,  
    borderRadius: 2,          
  }
  
  return (
    <ThemeProvider theme={TextStyles}>
    <Box  sx={TextStyles}>
    <code>{props.Entry}</code> 
    </Box>
    </ThemeProvider>
  )

}

