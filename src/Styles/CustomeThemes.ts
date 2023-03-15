
import { createTheme } from "@mui/material/styles";

const Color = {

    primary: '#E38035',
    secondary: "#c6ccd2",
    dark: "",
    light: "#c6ccd2",
    error: "",
    warning: "",
    info: "",
    success: "",
    mode: "",
    tonalOffset: "", 
    contrastThreshold: "", 
    common: "",
    grey: "",
    text: "",
    divider: "",
    action: "",
    background: "",
    
    // Solid Color //
    white: "",
    black: "",


};

const theme = createTheme({
     palette: {
        primary: {
            main: Color.primary
        },
        secondary: {
            main: Color.secondary
        },
        background: {
            default: Color.background
        }
     },
     components: {
        MuiButton: {
          variants: [
            {
                props: { variant: 'dashed' },
                style: {
                  textTransform: 'none',
                  border: `2px dashed ${Color.secondary}`,
                  color: Color.secondary,
                },
              },
          ]}},
});

export default theme