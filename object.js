// 1 sariin 7nd 30 dahi orolt.
// -------1 sariin 6nii udur hicheel nuhuv. 
// -------bubble sort iin code.
// var arr = [7,8,5,6];
// for(var i = 0; i < arr.length ; i++){
//     var temp;
//     for(var j = 0; j < arr.length; j++){
//         if(arr[j] > arr[j+1]){
//             temp = arr[j]; //8
//             arr[j] = arr[j+1]; //index 1 : 3 index 2 : 8
//             arr[j+1] = temp;  //
//         }
//     }
// }
// console.log(arr);



// Object methodiig uuruu zohioj bichsen bol 
// let person = {
//     name: "Dorj",
//     age: 22,
//     store: [22,44,66,8],
//     isMarried: false,
//     hi:function(name,age){
//         console.log('hello', name, age)
//     }
// }
// person.hi

// // Object method gdeg ni doorh bichiglel bolno.
// const arr = [1,2,3,];
// console.log(arr.includes(4))




// OBJECT-IIN BUH HREGLEE BOLON BICHIGLEL :
// 1.Create an object literal representing a person with properties for name, age, and city.
// let person = {     // gj bichsen uyd bi uuruu method zohioson gsn ug
//     name: "dorj",
//     age: 23,
//     city: 'mongol',
// }
// console.log(person)   // gh uyd persond bichigdsen buh utgiig grgaj irne.
// console.log(person.age)   // gh uyd onoogdson utgig gargaj irne. CSS-iin class shig




// 2.Create an object using the new Object() constructor.
// const person = new Object();     // gj object bichvel method ni belen bgaa
// person.name = "dash";
// person.age = 22;
// person.city = "mongol";
// console.log(person.name)




// // 3. Create an object using a constructor function.   mdehgui dusaagui.
// function person(name, age, city) {
//     this.name = "dash";
//     this.age = 22;
//     this.city = "mongol";
//   }
// console.log(this.name)




// // 4.Access and display the values of properties using dot notation and bracket notation.
// const person = {};
// person.name = "dash";
// person.age = 22;
// person.city = "mongol";
// console.log(person.name); // 1dehi duudah arga
// console.log(person["name"]); // 2dahi duudah arga




// // 5. Practice accessing nested properties (objects within objects).
// let person = {       // object dotr object bgaag 
//     name: "dorj",
//     age: 23,
//     city: "mongol",
// contact:{
//     number: 12345678,
//     mail:"hh@gmail.com"
// }
// }
// console.log(person.name,person.contact.number) // 1dehi object bolon 1dehi objectiin 2dahi objecttei hamt sortloh uyd
// console.log(person.contact.number) // object dotorh object utgiig haruulahdaa




// // 6. Add a new property to an existing object.
// let person = {
//     name: "dorj",
//     age: 23,
//     city: "mongol",
// }
// person.gender = "female"; // shineer shuud utgiig nemeh uyd.
// console.log(person)




// // 7. Modify the value of an existing property.
// let person = {
//     name: "hongor",
//     age: 25,
//     city: "usa",
//     gender: "female"
// }
// person.gender = "male"   //modify buyu ankh bichigsen utgiig uurchluh uyd
// console.log(person)




// // 8. Delete a property from an object.
// let person = {
//     name: "dorj",
//     age: 23,
//     city: "mongol",
//     gender: "male"
// }
// delete person.name;
// console.log(person)




// 9. Add a method to an object that performs a specific action (e.g., a greet() method for a person object).
// let person = {
//     name: "dorj",
//     age: 23,
//     city: "mongol",
//     gender: "male",
//     greet: function(){  //greet gdeg ni method 
//         console.log("sain uu");
//     }
// }
// person.greet()



// //10.  Call and execute methods on objects.
// let person = new Object;
//     person.name = "dash"
//     console.log(person.hasOwnProperty("name")) // object dotr zarlasan turul buyu key ni bgaa eshiig shalgah uyd. Keyd onoogdson utgiig ni gargaj chadahgui.

// console.log(person.name) // Keyd onoogdson utgaa gargana.
//     for(let [key,dash] of Object.entries(person))

// console.log(`${key}: ${dash}`);   // key bolon utgiig ni gargaj ireh uyd

//     person.age = 24;   // nas zaasan uyd ingene tgne gsen nuhtsuliig zaaj uguh uyd.
//     if(person.hasOwnProperty("age")){
//         console.log(person.name, "ni", person.age, "nastai");
//     }else{console.log("ta nasaa oruulna uu!")}




// // TEMPLATE LITTERAL    ---- ni olon huvisagch bh uyd amar bas mur buuh uyd enter daraad shuud bichij boldog. 
// let names = "orgil"
// console.log(`bi bol ${names}`)   // gedg ni template litteral
// console.log("bi bol", names)  // uyd \br gj mur buulgh commad ugdug. Olon utgiig bichih uyd. 
// console.log("bi bol"+" "+names)

// age = 23;           // template litteraliig ashiglan olon utgiig nemeh helber
// console.log(`bi bol ${names}   
// bi ${age}nastai `) 

// const names = ["baljin", "itgel", "ari"]
// names.sort()       //chartCodeAt ni bga gsn ug.
// // console.log(names)
// // console.log(names.includes("itgel"))
// const filteredName = names.filter(function(name)){
//     return name.length>5
// }
// console.log(filteredname)




// // ARRAY
// // 1. array dotorh objectiin utgiig haritsuulah. 
// const names = [     // array dotor object bichih uyd
//     {name:"itgel", 
//     age:17
//     },
//     {
//         name:"naraa", 
//         age:24
//     },
//     {
//         name:"batgel", 
//     age:53
//     }
// ]
// function checkIsAdult(){
//     for(let i =0; i<names.length; i++){
//         if(names[i].age>18){
//             console.log(names[i].name)
//         }
//     }
// }
// checkIsAdult()




// // 2. array dotorh objectiin keyuud yu bgaag.
// const names = [     
//     {name:"itgel", 
//     age:17
//     },
//     {
//         name:"naraa", 
//         age:24
//     },
//     {
//         name:"batgel", 
//     age:53
//     }
// ]
//     for(let i=0; i<names.length; i++){
//         names.keys()
//     }
// console.log(names)




// 3. array dotorh objectiin keyiin utgiig haih uyd
const names = [     
    {name:"itgel", 
    age:17
    },
    {
        name:"naraa", 
        age:24
    },
    {
        name:"batgel", 
    age:53
    }
]
    for(let i=0; i<names.length; i++){
        // if(names.keys==names.length ){
        //     console.log(names[i].name)
        // }
        names.name("itgel")
    }
console.log(names)
    

// // HOMEWORK 
// console.table([{name: 'naraa', age: 20}, {name: "orgil", age: 21}])

// let bagana = "10"
// for(i=0; i<bagana.length; i++){
//     if()
// }



// 1sarin 6 ni hiceel sudlah
// function hello(n){
//     let age = 20 + n
//     return age
// } // age global
// console.log(hello(1));

// {
//     let a= 1;
// }
// console.log(a)

