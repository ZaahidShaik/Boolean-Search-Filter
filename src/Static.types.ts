export interface MenuType
    {
        id?: number;
        name?: string;
    };

export interface QueryType
    {
        expressionId: number;
        operator: 'AND' | 'OR' | 'NOT';
        operand: QueryType | string;
    }


// List of Types.
export const OperatorsTypes = [ 'AND', 'OR', 'NOT'];


export interface operendType {
    expId: number,
    opId: number;
    operendType: string;
    value: String[];
  }

export const MenuIteams = [
    {
        id: 1,
        name: "Contry"
    },
    {
        id: 2,
        name: "Color"
    },
    {
        id: 2,
        name: "EyeColor"
    },
    {
        id: 2,
        name: "Traits"
    },
    {
        id: 2,
        name: "HelthIssues"
    },

]

// Static data for rendering dropdown and drop down list. 

export const OperandsDropdownMap = {
    Breed: ['Affenpinscher','Africanis','Akita','American Bulldog','American Eskimo Dog','Anatolian Shepherd','Australian Cattle Dog','Australian Kelpie','Australian Shepherd','','Australian Stumpy Tail Cattle Dog','Australian Terrier','Basenji','Basset Hound','Beagle','Belgian Malinois','Belgian Tervuren','Bichon Frise','Bloodhound','Border Collie','Border Terrier','Borzoi','Boston Terrier','Boxer','Brussels Griffon','Bull Terrier','Bulldog','Cairn Terrier','Cane Corso','Cardigan Welsh Corgi','Catahoula Leopard Dog','Chesapeake Bay Retriever','Chihuahua','Chinese Crested','Cocker Spaniel','Coton De Tulear','Dachshund','Doberman Pinscher','English Setter','English Springer Spaniel','English Toy Spaniel','Field Spaniel','Finnish Spitz','Flatcoated Retriever','French Bulldog','German Shepherd','Giant Schnauzer','Golden Retriever','Gordon Setter','Great Dane','Great Pyrenees','Greyhound','Harrier','Irish Setter','Irish Terrier','Irish Water Spaniel','Irish Wolfhound','Italian Greyhound','Jack Russell Terrier','Japanese Chin','Keeshond','Kerry Blue Terrier','Kuvasz','Labrador Retriever','Lhasa Apso','Maltese','Mastiff','Miniature Pinscher','Miniature Poodle','Miniature Schnauzer','Miniature Shiba Inu','Newfoundland','Old English Sheepdog','Papillon','Pekingese','Pharaoh Hound','Pointer','Pomeranian','Poodle','Pug','Rhodesian Ridgeback','Rottweiler','Saint Bernard','Saluki','Samoyed','Scottish Deerhound','Shar Pei','Shetland Sheepdog','Shih Tzu','Siberian Husky','Staffordshire Bull Terrier','Standard Poodle','Standard Schnauzer','Toy Poodle','Vizsla','Weimaraner','Welsh Corgi','Welsh Springer Spaniel','Welsh Terrier','West Highland White Terrier','Whippet','Wirehaired Pointing Griffon','Xoloitzcuintli','Yorkshire Terrier'],
    CountryOfOrigins: ['Africa','Australia','Belgium','Canada','China','Congo','England','Finland','France','Germany','Hungary','Ireland','Italy','Japan','Madagascar','Malta','Mexico','Middle East','Netherlands','Rhodesia','Russia','Scotland','Switzerland','Tibet','Turkey','United States','Wales'],
    FurColor: ['Apricot','Black','Blue','BlueTan','Blue','Brown','Cream','Fawn','Gold','Golden','Grey','LightMerle','Liver','Merle','Orange','Pink','Red','Red"Wheaten','Sable','Silver','White','Yellow'],
    CharacterTraits: ['Active','Affectionate','Athletic','Brave','Calm','Charming','Confident','Curious','Energetic','Friendly','Gentle','Good-Natured','Hypoallergenic','Independent','Intelligent','Kind','Loyal','Patient','Playful','Protective','Sensitive','Social','Strong','Trainable','Affectionate','Curious','Energetic','Gentle','Independent','Intelligent','Loyal','Playful'],
    HealthIssues: ['Bladderstones Cancer','Diabetes','Earinfections','Elbowdysplasia','Epilepsy','Eyeissues','Eye problems','Heart conditions','Hereditarymyopathy','Hipdysplasia','Obesity','Pancreatitis','Respiratoryissues','Skin allergies','Breathing problems','Commonhealth problems','Dental problems','Ear infections','Eye problems','Hipdysplasia','Intervertebraldisc disease'],
    EyeColor: ['Brown', 'Blue', 'Grey', 'Black'],
    Operators: ['AND', 'OR', 'NOT']
}
      
    
