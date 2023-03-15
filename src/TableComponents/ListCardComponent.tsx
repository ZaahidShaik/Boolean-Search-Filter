import { Box, Button, Checkbox, Chip, Pagination, Stack } from '@mui/material';
import React, { useState } from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';




const theme = createTheme({
  palette: {
    primary: {
      main: '#E38035',
    },
  },
});


function ListCardComponent(
  props: {
    responseData: any;
    counter: any; 
    requestExpression:any ;
  }
) {

 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  
    
   let TableData = props.responseData;
  //  setTableData(data);

  console.log("length of the data: " + TableData);

  // get current posts,
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = TableData.slice(indexOfFirstPost, indexOfLastPost);

   let pageNumber = []; //iteamsPerPage // toatl leangth = data.length
   let totalPosts = TableData.length;

   for( let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
    pageNumber.push(i);
   }
    
   let data = currentPosts;
  console.log(pageNumber);
  console.log(currentPosts);

  // const paginateUpadate = (pageNumb: number) => setCurrentPage(pageNumb)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const boxStyles = {
    display: 'flex',

    minWidth: 600,
    minHeight: 150,
    bgcolor: '#173A5E' ,
    borderRadius: 4,
    boxShadow: 3,

    pr: 2,
    m: 2,
  }

   return (
    <div>
      {/* Search Results.. : {props.counter} */}
      <Box sx={{ color: 'white', fontSize: 30, fontWeight: 'medium', alignItems: 'start', justifyContent: 'end' }}>Search Results</Box>
         
     <Box sx= {{  alignItems: 'center', justifyContent: 'stretch'}}>    
      {/* {JSON.stringify(data) !== '{}' ? */}
       {/* <div>{JSON.stringify(data)} </div> */}
        {/* : []}    */}
     
     { data.map((iteam :any, index: number) =>  { 
      return    <Box sx={boxStyles} key={index}  >
        {/* First Row on the card */}
        <Box  sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', width: 500, m:2, p:2}}>

        <Box sx={{ color: '#E38035', fontSize: 14, fontWeight: 'medium', alignItems: 'center' }}>Breed</Box>
        <Box sx={{ color: 'white', fontSize: 40, fontWeight: 'medium' }}>{iteam.Breed}</Box>

        
        <Box sx={{ color: 'success.dark',display: 'inline', fontWeight: 'medium',  }} >
        {/* <Box component={HeightOutlinedIcon} sx={{ color: 'success.dark', fontSize: 18, verticalAlign: 'sub' }}/> */}
        <Box sx={{ color: '#E38035', display: 'inline', fontSize: 18 }}> Country of Origin - {iteam.CountryofOrigin}</Box>   

        </Box>
        <Box sx={{ color: '#E38035', display: 'inline', fontWeight: 'medium', fontSize: 18 }} > Height - {iteam.Height} inch  </Box> 
        <Box sx={{ color: '#E38035', display: 'inline', fontSize: 18 }}> Longevity - {iteam.Longevity} yrs</Box>
        </Box >
      

      {/* Second Row on the card */}
        <Box  sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', minWidth: 400, m:2 , p:2}}>
       
        <Stack direction="row" spacing={1} sx={{mt:1}}>
        <Box sx={{ color: '#E38035', display: 'inline', fontWeight: 'medium', fontSize: 18, mt:0.1 }} > Character Traits - </Box> 
          {iteam.CharacterTraits.map((tag:string, id: number) => ( <Chip sx = {{ mt:1, color: '#E38035'}}label={tag} size="small" key={id}  variant="outlined"/>))}
        </Stack>


        <Stack direction="row" spacing={1} sx={{mt:1}}>
        <Box sx={{ color: '#E38035', display: 'inline', fontWeight: 'medium', fontSize: 18, }} > Fur Color - </Box> 
          {iteam.FurColor.map((tag:string, id: number) => ( <Chip sx = {{ mt:1,color: '#E38035'}}label={tag} key={id} size="small"  variant="outlined"/>))}
        </Stack>

        <Stack direction="row" spacing={1} sx={{mt:1}}>
        <Box sx={{ color: '#E38035', display: 'inline', fontWeight: 'medium', fontSize: 18, }} > Eye Color - </Box> 
          {iteam.ColorofEyes.map((tag:string, id: number) => ( <Chip sx = {{ mt:1,color: '#E38035'}}label={tag} key={id} size="small"  variant="outlined"/>))}
        </Stack>

        <Stack direction="row" spacing={1} sx={{mt:1}}>
        <Box sx={{ color: '#E38035', display: 'inline', fontWeight: 'medium', fontSize: 18, }} > Health Issues - </Box> 
          {iteam.CommonHealthProblems.map((tag:string, id: number) => ( <Chip sx = {{ mt:1,color: '#E38035'}}label={tag} key={id} size="small"  variant="outlined"/>))}
        </Stack>

        </Box >

       </Box>

     }) }
       

       {/* Paginator */}
      <ThemeProvider theme={theme}>
      <Stack spacing={3} sx= {{  alignItems: 'center', justifyContent: 'stretch', height: '100%',pt: 2, paddingBottom: '100px',}}>
      
      <Pagination  count={pageNumber.length} shape="rounded" sx={{fontSize: 40, fontWeight: 'bold', color: 'white', textTransform: 'capitalize', colorScheme: 'white', }} 
                 size="large" color='primary' page={currentPage} onChange={handleChange}/>
      </Stack>
      
      </ThemeProvider>

      </Box> 

       
    </div>



  )
}

export default ListCardComponent

// SampleObjectResponse
/*
 {
        "Breed": "Labrador Retriever",
        "CountryofOrigin": "Canada",
        "FurColor": [
            "Yellow",
            "Black",
            "Chocolate"
        ],
        "Height": 35,
        "ColorofEyes": [
            "Brown"
        ],
        "Longevity": 23,
        "CharacterTraits": [
            "Loyal",
            "friendly",
            "intelligent",
            "energetic",
            "good-natured"
        ],
        "CommonHealthProblems": [
            "Hip dysplasia",
            "obesity",
            "ear infections"
        ]
    },
    
    */ 