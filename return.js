// // 1. Two sum
// const nums = [3, 2, 4];
// const target = 6;

// const obj = {};
// for(let i=0; i<nums.length; i++){
//     if(obj.hasOwnProperty(nums[i])){
//     console.log(obj[nums[i]],i)   
//     }
//     else{ 
//         obj[target-nums[i]]=i;   // array dotr bga too ni uruu uuruu dere nemehgui bhiin tuld
//     }
// }
// 2. 
const weather = [
    {
        "date": "2024-12-26",
        "temperature": {
            "current": -18.7,
            "min": -22.9,
            "max": -14.5
        }
    },
    {
        "date": "2024-12-27",
        "temperature": {
            "current": -19.2,
            "min": -24.0,
            "max": -14.4
        }
    },
    {
        "date": "2024-12-28",
        "temperature": {
            "current": -17.4,
            "min": -21.2,
            "max": -13.5
        }
    },
    {
        "date": "2024-12-29",
        "temperature": {
            "current": -16.4,
            "min": -22.0,
            "max": -10.7
        }
    },
    {
        "date": "2024-12-30",
        "temperature": {
            "current": -15.7,
            "min": -20.5,
            "max": -10.9
        }
    },
    {
        "date": "2024-12-31",
        "temperature": {
            "current": -17.4,
            "min": -22.7,
            "max": -12.1
        }
    },
    {
        "date": "2025-01-01",
        "temperature": {
            "current": -20.4,
            "min": -23.9,
            "max": -16.8
        }
    },
    {
        "date": "2025-01-02",
        "temperature": {
            "current": -20.1,
            "min": -25.8,
            "max": -14.3
        }
    },
    {
        "date": "2025-01-03",
        "temperature": {
            "current": -17.8,
            "min": -23.5,
            "max": -12.0
        }
    },
    {
        "date": "2025-01-04",
        "temperature": {
            "current": -18.3,
            "min": -22.4,
            "max": -14.2
        }
    },
    {
        "date": "2025-01-05",
        "temperature": {
            "current": -16.8,
            "min": -22.0,
            "max": -11.6
        }
    },
    {
        "date": "2025-01-06",
        "temperature": {
            "current": -16.6,
            "min": -22.4,
            "max": -10.7
        }
    },
    {
        "date": "2025-01-07",
        "temperature": {
            "current": -15.9,
            "min": -22.2,
            "max": -9.6
        }
    },
    {
        "date": "2025-01-08",
        "temperature": {
            "current": -15.6,
            "min": -21.9,
            "max": -9.3
        }
    }
]

// 1. Ognoog iheesn bagaruu bolgoh 1 saraas 12 hurtel. Descenting sort.

//// --1 arga
// const newweather = weather.reverse();
// console.log('newweather:', newweather)

//// --2 arga
const sortedWeater = weather.sort((a, b) => new Date(b.Date)- new Date(a.date))
console.log(sortedWeater)



// 2. zuvhun suuliin doloo hongiin tsag agaariin medeell haruulah. Last week weather information
// for(i=0; i<weather.length; i++){
//     if("2025-01-02"<weather[i].date){   // shuud zaasan ugnees hoishiig haruulah uyd
//         console.log(weather[i])
//     }
// }

// //-------Davaa garigaas ehleed gdeg nutsul zaaj ugj bgaa uyd.
// const today = new Date();
// const currentWeekMonday = new Date(today.getDate()-today.getDay())
// currentWeekMonday.setDate(today.getDate()-today.getDay())
// const sliced = weather.filter(element => {
//     return new Date(element.date) > currentWeekMonday 
// })
// console.log(sliced)


// // -----------Turshilt buyu anhan oilgolt
// const ages = [13,31,19,27,18];
// for(i=0; i<ages.length; i++){
//     if(21<ages[i]){
//         console.log(ages[i],i)
//     }
// }

// const students = [
//     {name: "Bold", age: 13} ,
//     {name: "Sarnai", age: 31},
//     {name: "Suren", age: 32} ,
//     {name: "Zolboo", age: 17},
// ]
// for(i=0; i<students.length; i++){
//     if(21<students[i].age){
//         console.log(students[i].name)  //// array-iin heddehi ni ali utgaar gdgiig zaaj ugj bga uyd
//     }
// }







// 3. Nernii Array-in bodlogo
const names = [
    "baljan",
    "itgel",
    "jamiyansuren",
    "chingun",
    "telmuun",
    "chinguun",
    "nomi",
    "aygul",
    "behbat",
    "narangerel",
    "oyunbat",
    "turbat",
    "baasandash",
    "jargalsaihan",
    "tugsbileg",
    "huwituguldur",
    "ursaa",
    "ider",
    "ariunjargal"
  ];

// 1. 2 dahi usgeer ni a-z hurtel sortloh. Ascending sort names second letter

// names.sort((a, b) => {
//     return a[1].charCodeAt() - b[1].charCodeAt()
// })
// console.log(names)


// //-------miniii arga dutuu bgaa.
// const sortnames =[]
// let secondletter =[]
// for(i=0; i<names.length; i++){
//     //  secondletter.push(sortnames.sort()); 
//     sortnames.push((names[i].charAt(1)))
// }
// console.log(names((names[i].charAt(1))))





// // 2. nernii ehnii usgeer ni groupleh tus tusad ni arrayd hiine. Names group by first letter
//  const obj = {};
//  names.forEach((element) => {
//     if(obj.hasOwnProperty(element[0])){
//         obj[element[0]].push(element)
//     }else{
//         obj[element[0]] = [element]    // {"b" : baljin gj gargaj irne}
//     }
//  })

//  const nestedArray = Object.values(obj)
//  console.log(obj)

// 

