/* eslint-disable array-callback-return */
import * as React from 'react';
import Grid from '@mui/material/Grid';

import '../Styles/ExpressionBuilder.css'; 
import { QueryType} from '../Static.types';
import Dropdown from '../FormActions/Dropdown';

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {renderSwitch} from '../App';
import { labelstyles } from './ContryComponent';
import { Button } from '@mui/material';
import {OperandsDropdownMap} from '../Static.types';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


/*
Props: 
Expresion id: number // key of new/ existing expression in the object.
Operator Key : AND, OR, NOT, // operator value to set in the drop down. 
Operarends Expected: Number // Number of operators that are to be expected
CurrentQueryObject: JSON // [Optional] the current state of the query JSON. 
*/ 
export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1A2027',
    gap: 1,
    padding: theme.spacing(3),
    justifyContent: 'space-evenly' ,
    flexGrow: 1 ,
    display: 'flex',
  
  }));



  interface operendType {
    expId: number,
    opId: number;
    operendType: string;
    value: String[];
  }

function OperatorFormBuilder(
props :{
    key: number,
    type: string, 
    operator: string , 
    operand: any[], 
    queryState?: any,
    callBackfuntion: any,
    index:number,
}) {


    // console.log("Props in Builder : " +JSON.stringify(props));

    // console.log(props.key);
     
   

    // console.log(JSON.stringify("value list: "+ JSON.stringify(operendList)));
     

    //Unpacking the Oparends to render
    let operendList: Array<operendType> = props.operand;
    const renderElement = operendList.map((iteam)=> {return renderSwitch(iteam.opId, iteam.operendType,'', iteam.value, props.queryState, props.callBackfuntion, props.index) })

    //  CallBackfuntion to update the currentState
    function parentCallBackToAddNewOperand(){
            console.log("calling parent!!! from Expression builder to Add Operand")
        
               console.log("Expression ID: "+ props.index);


                   props.callBackfuntion('null', 'null', props.index,[], 'AddNewOperand',props.operator);

          }

    // Remove Operator
    function parentCallBackToremoveOperator(){
        console.log("This Operator and its content are being removed..! (TO-DO)")
    } 

    function parentCallBackToUpdatetheValue( newValue: string){
 
        console.log("NewValue recived in country "+ newValue)
         props.callBackfuntion('null','null', props.index, '', 'UpdateOperator', newValue);
  
      }

  return (

    <>
      <div className="flexbox-container-5">
       {/* Oparator for the expression */}

       <div className="flexbox-item flexbox-item-1">

       <div className="flex-label-containor">
       <div className="flexbox-item flexbox-items-operator-dropdown">
       <Box sx={labelstyles}>
       <Dropdown placeholder={'Operator'} OperationList={OperandsDropdownMap.Operators} value={props.operator} CallBackfuntion={parentCallBackToUpdatetheValue}/>
       </Box>
      </div>
      </div>


      <div className="flex-label-containor">
       <div className="flexbox-item flexbox-items-operator-dropdown">
       <Box sx={labelstyles}>
       <Button onClick={parentCallBackToAddNewOperand}><AddOutlinedIcon/></Button>
       <Button onClick={parentCallBackToremoveOperator}><DeleteOutlinedIcon /></Button>
       
       </Box>
      </div>
      </div>
      
       </div>

        {/* Recursive list for operators */}
       {/* list of operends */}
       <div className="flexbox-item flexbox-item-2"> 
       <div className="flexbox-container-4">
    
        {renderElement}

      </div>
       </div>

      </div>


     
    </>
  )
}

export default OperatorFormBuilder

