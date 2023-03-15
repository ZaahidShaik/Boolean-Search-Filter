import { log } from 'console';
import React from 'react'
import { renderSwitch } from '../App';
import SimpleCard from '../Utility/SimpleCard';
import OperatorFormBuilder from './OperatorFormBuilder';



// This component is a pass though for Nested commponents
function NestedExpression(
props :{
    Oparendkey: number,
    Oparendtype: string,  
    queryState?: any[],
    values: any[],
    callBackfuntion: any,
}) {

  // console.log(JSON.stringify(props))
  
    /*Convention for this project: if its a nested expression the value field 
    will store the pointer pointing to the Expression Id of the object to render*/ 
    const expressionId = +props.values![0]

   function getExpression(){
      let expression = {};
       props.queryState!.map((iteams) =>  { if(iteams.Id === expressionId){
        console.log("check:"+ (iteams.Id === expressionId), "Iteams" + JSON.stringify(iteams), "Expression" + JSON.stringify(expression));
        expression = iteams
        } } )
     return expression; 
   }
    
   const renderExpression: any = getExpression();
   console.log("RenderExpression : "+ JSON.stringify(renderExpression))

  return (
    // <div>
    //     NestedExpression; expression to call {expressionId} rendering {JSON.stringify(renderExpression)}
    //     {/* {renderSwitch(renderExpression.Id, renderExpression.type, renderExpression.operator, renderExpression.operand, props.queryState)} */}
    // </div>
      //  <div>NestedComponent</div>
       <OperatorFormBuilder key={renderExpression.Id} type={renderExpression.type} operator={renderExpression.operator} operand={renderExpression.operand}  
                            queryState={props.queryState} callBackfuntion={props.callBackfuntion} index={renderExpression.Id} />
  )
}

export default NestedExpression