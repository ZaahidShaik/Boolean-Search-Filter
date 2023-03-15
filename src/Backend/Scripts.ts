import SearchJsonArr from '../data/dog_breedsJSON.json';


// let newJson = [{}];

//    newJson = SearchJsonArr.map((obj) => {
       
//        let editedobject = obj;
//     //    @ts-ignore
//     //   editedobject.CommonHealthProblems = obj.CommonHealthProblems.split(",");
//         return editedobject
//    })

// console.log(newJson);




export function searchExpression( RequestObject: any, count:any){

    //   Simple query to mock backend call. 
    // Search terms breed that has ContryofOrigin: France AND EyeColor: Brown;
    
    //  console.log("Got this Request at the Backend: "+ JSON.stringify(RequestObject), "cont: "+ count);

    return ORExpression();
};


// premaid search call to filter out JSON to filter and breeds havinging country of origin 'England' or 'France'
function ORExpression(){
    let newReponseArr = SearchJsonArr.filter((obj) => {
        // return (obj.CountryofOrigin == 'England' || obj.CountryofOrigin == 'France') && obj.CharacterTraits.includes("Loyal")
         return obj.CountryofOrigin === 'England' || obj.CountryofOrigin === 'France'
     })
        console.log("Response count: ", newReponseArr.length )
     return newReponseArr
}


