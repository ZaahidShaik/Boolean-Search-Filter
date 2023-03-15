import React from 'react'
import OperatorFormBuilder from './OperatorFormBuilder';

function InitialComponent(
    props: {
        firstExpression: any,
        queryState:any,
        callBackFuntion:any,
    }
) {
  return (
    <OperatorFormBuilder key={props.firstExpression.Id} type={props.firstExpression.type} operator={props.firstExpression.operator} 
          operand={props.firstExpression.operand}  queryState={props.queryState} callBackfuntion={props.callBackFuntion} index={props.firstExpression.Id}/>
  )
}

export default InitialComponent