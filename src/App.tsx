import * as React from 'react';

import './App.css';
import './Styles/FelexBoxCss.css';
import theme from './Styles/CustomeThemes'

import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';

import MenuBtn, { buttonStyles } from './Components/MenuBtn';
import OperationsBtnGroup from './Components/OperationsBtnGroup';

import OperatorFormBuilder from './Components/OperatorFormBuilder';
import SelectCard from './Utility/SelectCard';
import HealthIssuesComponent from './Components/HealthIssuesComponent';
import TraitsComponent from './Components/TraitsComponent';
import EyeColorComponent from './Components/EyeColorComponent';
import ColorComponent from './Components/ColorComponent';
import ContryComponent from './Components/ContryComponent';

import { MenuIteams, OperatorsTypes, operendType} from './Static.types';
import { useState, useEffect } from 'react';



import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Button, Container, ThemeProvider } from '@mui/material';

// MockData
import responseJSON from './data/ResponseData.json';
import NestedExpression from './Components/NestedExpression';
import SimpleCard from './Utility/SimpleCard';
import FlexBox from './Utility/FlexBox';
import GridContainer from './Utility/FlexBox';
import PaperBackground from './Utility/PaperBackground';
import InitialComponent from './Components/InitialComponent';
import Header from './Utility/Header';
import BlackBox from './Utility/BlackBox';
import HeightComponent from './Components/HeightComponent';
import ListCardComponent from './TableComponents/ListCardComponent';
import RoutingScripts from './Routing/RoutingButton';
import RoutingButton from './Routing/RoutingButton';
// import mockQueryJSON from './data/MockExpression.json';

const mockQueryJSON = [
  {
      "Id": 1,
      "type": "Expression",
      "operator": "OR",
      "operand": [
          {
              "operendType": "Contry",
              "opId": 0,
              "value": ["USA","India"]
          },
          {
              "operendType": "Traits",
              "opId": 1,
              "value": ["Happy","Jumpy"]
          }
      ]
  },
  {
      "Id": 0,
      "type": "Expression",
      "operator": "AND",
      "operand": [
          {
              "operendType": "",
              "opId": 0,
              "value": ["USA","India"]
          },
          {
              "operendType": "",
              "opId": 1,
              "value": ["1"]
          }
      ]
  }
]


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  padding: theme.spacing(1),
  justifyContent: 'space-evenly' ,
  flexGrow: 1 ,
  display: 'flex',

}));

interface QueryType {
    Id: number;
    type: string;
    operator: string;
    operand: Array<operendType>;
}





function App() {



  const useOparendObject = [{
      expId: 0,
      opId: 0,
      operendType: 'Contry',
      value: ['']
    }];

    const createInitialQuery = [{
      Id: 0,
      type: 'FirstEntry',
      operator: 'AND',
      operand: [
             {
              expId: 0,
              opId: 0,
              operendType: 'SimpleCard',
              value: ['']
             }
      ],
    }];

  let currentId = 0;

  const [QueryObjects , setQueryObjects] = useState(createInitialQuery);

  const [CurrentExps , setCurrentExps] = useState(useOparendObject);

  const [firstExpression , setfirstExpression] = useState({});

  const [TableData, setTableData ] = useState([]);
  
  
  // state for the reponse JSON.
   const [RepsData, setRepsData] = useState({});

  // API call to get data from the Backend 
  // (for this project just using a JSON file (Path: ) to mimic the call action.
  useEffect( () => {
        setRepsData(responseJSON[0]); 
  }, [])

  // Rest the cuerry and current state. 

     function  resethequerystate(){
  
      setQueryObjects(createInitialQuery)
      setCurrentExps(useOparendObject)
      console.log("expression and current expression was reset....!")
      }


  // Call back funtion to update the selected operend. [Actions Remove or Update Vale for Operator, Operands]
  function updateSelectedOperaend(OperarendID: number, OperendType: string, expId: number, OparendValues: any, Action: string, newOperatorType: string ){
    if(OperendType !== 'null'){
      setCurrentExps([{ expId: expId, opId: OperarendID, operendType: OperendType, value: OparendValues}]); 

      console.log("Updatating the currentExpression state: ",JSON.stringify(CurrentExps)  + `--> With NewOpdID:${OperarendID}, newType: ${OperendType}, expId: ${expId}, newOperandValue: ${OparendValues}` );

    }
 
  
    // If action is "Remove" based on the OperandId and ExpressionId index 
    if(Action === 'Remove'){
      console.log('Removing this Operand .....!')
      removeOprandfromExpression(expId,OperarendID);
    }

    if(Action === 'UpdateOperandValue'){
      // Logic to Update the OpereandValue based on the OperandId and ExpressionId index 
      console.log('UpdateOperandValue this Operand vaue.....!')
      updateOperandValue(expId, OperarendID, OparendValues);
    }

    if(Action === 'UpdateOperator'){
       // Logic to Update the Operator based on the ExpressionId index 
       console.log('Update Operator for the expression .....!')
       updateOperator(expId, newOperatorType);

    }

    if(Action === 'AddNewOperand'){
       // Logic to Add new Opereand arrayObject based on the OperandArraycurrent.length and ExpressionId index 
       console.log('Add New Operand to this expression.....!')
       addNewOperandExpression(expId);

    }
  
  
  }

  function updateOperator(expressionId:number, newOperatorType: string){
    console.log(`updateOperator -(expressionId:${expressionId}, newOperatorType: ${newOperatorType})`)
    let NewExpression: any;
     NewExpression = QueryObjects.map((object) => {
        if(object.Id === expressionId){
               object.operator = newOperatorType;
          return object
        }
        return object
      });
      setQueryObjects(NewExpression)
  } 

  function removeOprandfromExpression(expressionId:number, OperandId:number){
    console.log(`removeOprandfromExpression -(expressionId:${expressionId}, OperandId:${OperandId},`)
    let NewExpression: any;
    NewExpression = QueryObjects.map((object) => {
        if(object.Id === expressionId){
          let UpdatedOprendArray: any = object.operand.map( (operandObj) => {
                if(operandObj.opId === OperandId){
                   operandObj.operendType = 'SimpleCard';
                   operandObj.value = [ ];

                   return operandObj
                }
                return operandObj;
                })
                object.operand = UpdatedOprendArray
          return object
        }
        return object
      });
      setQueryObjects(NewExpression)   
  }
  
  function updateOperandValue(expressionId:number, OperandId:number, newOperandArray: any){
    console.log(`updateOperandValue -(expressionId:${expressionId}, OperandId:${OperandId}, newOperandArray: ${newOperandArray})`)
    let NewExpression: any;
    NewExpression = QueryObjects.map((object) => {
        if(object.Id === expressionId){
          let UpdatedOprendArray: any = object.operand.map( (operandObj) => {
                if(operandObj.opId === OperandId){
                   operandObj.value[0] = newOperandArray;
                   
                   return operandObj
                }
                return operandObj;
                })
                object.operand = UpdatedOprendArray
          return object
        }
        return object
      });
      setQueryObjects(NewExpression)
  }

  function addNewOperandExpression(expressionId:number){
    console.log(`addNewOperandExpression - (expressionId:${expressionId}`)
    let NewExpression: any;
    NewExpression = QueryObjects.map((object) => {
        if(object.Id === expressionId){
          let newOperandObj = {
            expId: expressionId,
            opId:  object.operand.length++,
            operendType: 'SimpleCard',
            value: [ ]
          }

         object.operand.push(newOperandObj)
          //  object.operand = newOparendArray
          return object
        }
        return object
      });
      setQueryObjects(NewExpression)
  }


  function updateExpressionOperendwithTypetoNestedExps(ExpressionObject:Array<QueryType>, newValue: any, newExpressionId: number): any {
    let updatedExpressionOperends = ExpressionObject.map((object: QueryType) => {
      if(object.Id === CurrentExps[0].expId){
        let currentOperandArr = object.operand;
        console.log("Current OperendArray : "+ JSON.stringify(currentOperandArr))

        let newOprandArr = updateOperendObjectTypeNested(currentOperandArr, newValue, newExpressionId); 

        if(object.Id === 0){
        setfirstExpression({...firstExpression, operator: object.operator!, operand: newOprandArr});
        }

        console.log("New OperendArray : "+ JSON.stringify(newOprandArr))
    
        return {...object, operand: newOprandArr }
      } 
      // console.log("returning Operend object:  " + JSON.stringify(object))
      return object;
    })

    return updatedExpressionOperends
      
    }
   //Update the OprendType field in Oparend Array
   function updateOperendObjectTypeNested(operends: Array<operendType>, newValue: any, newExpressionId: number) { 

    let newOprendArr = operends.map((oprend) => {
      if (oprend.opId === CurrentExps[0].opId){
        console.log("Updating the Operend Object : "+ JSON.stringify(oprend))
        // console.log(`updating the fiels ${fieldToUpdate} with new value ${newValue} retirn object ${JSON.stringify({...oprend, operendType: newValue })}`)
        return {...oprend, operendType: newValue, value: [+newExpressionId] }
      } 
        // console.log("Not updating the field for: " + JSON.stringify(oprend))
        return oprend; 
    })

      return newOprendArr
   }


  //  Callback Fn() for the Operators Buttons
  function addNewQueryObject(query: typeof QueryObjects, operator: 'AND' | 'OR' | 'NOT', operendsCount: number ){
    

    // Run only for first entry.
     if( query[0].type === 'FirstEntry'){
      query = [];
      let currentId = query.length;
      setQueryObjects([{Id: currentId, type:'Expression', operator: operator!, operand: buildOperandArray(operendsCount, currentId)}, ...query]);
      setfirstExpression({Id: currentId, type:'Expression', operator: operator!, operand: buildOperandArray(operendsCount, currentId)})
      console.log(query, currentId);
    }
     else {
      let currentId = query.length;
      // Run for all other entry.
      console.log("This is Second Entry for Oparends")
      //Check for the currentExpression state and get that Id object from the Query Expression
      //Update the OparendsType Key to NestedExpression and update currentExpression, 
      //Update the Query Expression at the refernce Oparend and then add the new Expression to the query
      let updatedExpression = updateExpressionOperendwithTypetoNestedExps(QueryObjects, 'NestedExpression', currentId );
      
      console.log("newState: " + JSON.stringify(updatedExpression))
       //  set new state
       setQueryObjects([{Id: currentId, type:'Expression', operator: operator!, operand: buildOperandArray(operendsCount, currentId)}, ...updatedExpression]);
     }

  }

   function buildOperandArray( expectedOpnds: number, expressionId: number){
    let operendArr = [];
     for(let i =0; i< expectedOpnds; i++){
          let operendObj = {
            expId: expressionId,
            opId: i,
            operendType: 'SimpleCard',
            value: [ ]
          }
        operendArr.push(operendObj);
     }
      return operendArr;
   }
  

  //  Callback fu() for Catoagory Menu Buttons 
   function addNewOperend(fieldtoUpdate: any, updatedValue: any){

    //get the selected Id object
  function updateExpressionOperendwithType(ExpressionObject:Array<QueryType>, newValue: any): any {
    let updatedExpressionOperends = ExpressionObject.map((object: QueryType) => {
      if(object.Id === CurrentExps[0].expId){

        let currentOperandArr = object.operand;
        console.log("Current OperendArray : "+ JSON.stringify(currentOperandArr))

        let newOprandArr = updateOperendObjectType(currentOperandArr, newValue); 

        if(object.Id === 0){
          setfirstExpression({...firstExpression, operand: newOprandArr});
          }

        console.log("New OperendArray : "+ JSON.stringify(newOprandArr))
          
      //  console.log("returning New Operend object:  " + JSON.stringify(updateOperendObject(object.operand, newValue)))
        return {...object, operand: newOprandArr}
      } 
        // console.log("returning Operend object:  " + JSON.stringify(object))
        return object;
    })

    return updatedExpressionOperends
      
    }

    

     //Update the OprendType field from Oparend 
     function updateOperendObjectType(operends: Array<operendType>, newValue: any) { 

      let newOprendArr = operends.map((oprend) => {
        if (oprend.opId === CurrentExps[0].opId){
          console.log("Updating the Operend Object : "+ JSON.stringify(oprend))
          // console.log(`updating the fiels ${fieldToUpdate} with new value ${newValue} retirn object ${JSON.stringify({...oprend, operendType: newValue })}`)
          return {...oprend, operendType: newValue }
        } 
          // console.log("Not updating the field for: " + JSON.stringify(oprend))
          return oprend; 
      })

        return newOprendArr
     }
     

     let newQuery = updateExpressionOperendwithType(QueryObjects, updatedValue);
      
      console.log("newState: " + JSON.stringify(newQuery))
    //  set new state
    setQueryObjects(newQuery);

 }
  

// Callback to update the table response data state from Router Button 

function  UpdateResponseDataState(newData: any){
    //  Set new response data state.
    setTableData(newData);
    // console.log("Data recived"+JSON.stringify(newData));
    console.log("Data recived");

}




  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <p>
          {/* <code>Boolean Search builder</code>  */}
        </p>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* <div>
        </div>

      </header> */}

    <ThemeProvider theme={theme}>

      <div className= "grid-container">
          <div className= "grid-iteams grid-iteams-1">
          {/* <code>Boolen Search builder</code>  */}
          <Header/>
          {/* <p>Current Expression : {JSON.stringify(CurrentExps)}</p>
          <div>Expression built{QueryObjects.map((Expressions, index) =>  <p>{JSON.stringify(Expressions)}</p>)}</div> */}
          </div>
          
          <div className= "grid-iteams grid-iteams-2">
          
          <Box sx={{ color: 'white', fontSize: 20, fontWeight: 'medium', display: 'inline',  fontFamily: 'Monospace' }}>
            Boolean Operators</Box>
          
          <Box sx={{ color: 'white', fontSize: 20, fontWeight: 'medium', display: 'flex', flexDirection: 'row', }}>
             <OperationsBtnGroup queryObject={QueryObjects} setObject={addNewQueryObject}/> 
             {/* <Button sx={{buttonStyles}} onClick={resethequerystate}><RestartAltOutlinedIcon  /></Button> marginLeft: '70px' */}
          </Box>
            
          </div>

          <div className= "grid-iteams grid-iteams-3">
          
          <Box sx={{ color: 'white', fontSize: 20, fontWeight: 'medium', display: 'inline',  
          textAlign: 'left', fontFamily: 'Monospace' }}>
            Filter Categories</Box>
            <MenuBtn menuList= {MenuIteams} currentQueryState={QueryObjects} currentExpsState={CurrentExps}  clickAction={addNewOperend}/>
          
          </div>
          
          <div className= "grid-iteams grid-iteams-4">
          <Box sx={{ color: 'white', fontSize: 20, fontWeight: 'medium', 
          display: 'inline',  fontFamily: 'Monospace', textAlign: 'left' }}>
          Build your expression here..
          </Box>

          <div className="flexbox-container-5">
          <form action="">
            <div className="start">
            
              { JSON.stringify(firstExpression) === '{}' ? 
              <div className="flexbox-container-4">
              <SelectCard setIndexStateCallBack={null} expressionId={null} OprendIndex={null}/> 
              </div>
              :<InitialComponent firstExpression={firstExpression} callBackFuntion={updateSelectedOperaend} queryState={QueryObjects} />}
 
            </div>
          </form>

          
          </div>



          <div>
          {/* //Uncomment to see the layour for the expressionBuilder */}
          {/* <BlackBox/> */}
          </div>
          

          </div>
          <div className= "grid-iteams grid-iteams-6">
          <RoutingButton currentQueryExps={QueryObjects} CallBackFuntion={UpdateResponseDataState}   />
          </div>

          <div className= "grid-iteams grid-iteams-7">
          {/* <SimpleCard/> */}

          
                    { JSON.stringify(TableData) !== '[]' ? <ListCardComponent responseData={TableData} counter={undefined} requestExpression={undefined}  /> : []}
          </div>

          <div className= "grid-iteams grid-iteams-5">

          </div>

      </div>


    </ThemeProvider>


      {/* <GridContainer/> */}

      


    </div>
  );
}


export default App



export function renderSwitch(index: number, type: string, operator: string , operand: any, queryState: any, callbackfuntion?:any, expressionKey?: number) {

  switch(type) {
    case 'Expression':
      console.log(`Calling Expression`)
      // console.log(`Calling Expression key=${index} type=${type} operator=${operator} operand=${JSON.stringify(operand)}   callBackfuntion=${callbackfuntion}`);
      return <OperatorFormBuilder key={index} type={type} operator={operator} operand={operand}  queryState={queryState} callBackfuntion={callbackfuntion} index={index} />;

    case 'NestedExpression':
      console.log("Calling NestedExpression");
        return <NestedExpression Oparendkey={index} Oparendtype={type} values={operand}  queryState={queryState} callBackfuntion={callbackfuntion}/>;
    
    case 'Country':
      return <ContryComponent key={index} OprendIndex={index}  OprendType={type} OprendExpression={operand} setIndexStateCallBack={callbackfuntion} expressionId={expressionKey} />;
    
    case 'Color':
      return <ColorComponent key={index} OprendIndex={index}  OprendType={type} OprendExpression={operand} setIndexStateCallBack={callbackfuntion} expressionId={expressionKey} />;
    
      case 'Height':
        return <HeightComponent key={index} OprendIndex={index}  OprendType={type} OprendExpression={operand} setIndexStateCallBack={callbackfuntion} expressionId={expressionKey} />;

    case 'EyeColor':
      return <EyeColorComponent key={index} OprendIndex={index}  OprendType={type} OprendExpression={operand} setIndexStateCallBack={callbackfuntion} expressionId={expressionKey} />;
 
    case 'Traits':
      return <TraitsComponent key={index} OprendIndex={index}  OprendType={type} OprendExpression={operand} setIndexStateCallBack={callbackfuntion} expressionId={expressionKey} />;
    
    case 'HealthIssues':
      return <HealthIssuesComponent key={index} OprendIndex={index}  OprendType={type} OprendExpression={operand} setIndexStateCallBack={callbackfuntion} expressionId={expressionKey} />;

    case 'SimpleCard':
      console.log(`Calling SimpleCard`);
      // console.log(`Calling Selectcard : OprendIndex=${index}  OprendType=${type} OprendExpression=${JSON.stringify(operand)} setIndexStateCallBack=${callbackfuntion} expressionId=${expressionKey}`);
      return (
        // <div className="flexbox-item flexbox-item-4">
        <SelectCard key={index} OprendIndex={index}  OprendType={type} OprendExpression={operand} setIndexStateCallBack={callbackfuntion} expressionId={expressionKey}/>
        //  </div>
      )
      

    default:
      // console.log(`Calling default : OprendIndex=${index}  OprendType=${type} OprendExpression=${JSON.stringify(operand)} setIndexStateCallBack=${callbackfuntion} expressionId=${expressionKey}`);
      return (
      // <div className="flexbox-item flexbox-item-4">
        <SelectCard key={index} OprendIndex={index}  OprendType={type} OprendExpression={operand} setIndexStateCallBack={callbackfuntion} expressionId={expressionKey}/>
      // </div> 
      ) 
  }
}




