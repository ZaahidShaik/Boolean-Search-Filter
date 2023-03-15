import { Button } from '@mui/material';
import React, {useEffect , useState} from 'react'
import { searchExpression } from '../Backend/Scripts';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

function RoutingButton(
   props : {
    currentQueryExps: any;
    CallBackFuntion:any;
   }

) {
  


   const [request, setRequest] = useState(0);

//    let RequestObject = "Hi I got the request... searching the data..";
   
   let counter = 0;

    // useEffect(() => {
    //     const fetchResponse = async () => {

    //         // setLoading(true);
    //         const res = await searchExpression(request, counter);
    //         // setPosts(res);
            
    //         // setLoading(false);
    //     }
    //     fetchResponse();
    // }, [request, counter]);

    function callBackendAPI(){
        // counter++;
        console.log('calling backend...! Sending this query Array')
        console.log(props.currentQueryExps)
        let data =  searchExpression(request, counter);
        // setRequest(props.currentQueryExps);
        props.CallBackFuntion(data)
        console.log(data)
      }
     
     const buttonStyles ={
        fontSize: 18, 
        fontWeight: 'medium', 
        boxShadow: 3,
        borderRadius: 3,
        color: '#E38035', 
        bgcolor: '#173A5E' ,
        width: '40%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',

        
        mr: 1,
        ml: 1,
        // textTransform: 'capitalize',
        '&:hover': {
          color: 'white',
          backgroundColor: 'black',
        },
      }

       


  return (
     <div>
     <Button sx={buttonStyles}onClick={callBackendAPI}>Send Request <ArrowForwardIosOutlinedIcon sx={{pl: 1 , mb: 0.5}}/></Button>
     </div>

  )
}

export default RoutingButton