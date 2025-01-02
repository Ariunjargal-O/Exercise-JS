

// ---Lvl1 Yrunkhii array 
// let nums = [1,2,3,4];
// let result = 0;
// for(let i = 0; i <nums.length; i++){
//     result += nums[i];
// console.log(result)
// }





// 1. --- names fileees find hiih

// const names = [    "baljan",    "itgel",    "jamiyansuren",    "chingun",    "telmuun",    "chinguun",    "nomi",    "aygul",    "behbat",    "narangerel",    "oyunbat",    "turbat",    "baasandash",    "jargalsaihan",    "tugsbileg",    "huwituguldur",    "ursaa",    "ider",    "ariunjargal"];
// let find = "ursa"
// for(i=0;i<names.length; i++){
//     find == names.length
// }console.log(find)


// const names = [    "baljan",    "itgel",    "jamiyansuren",    "chingun",    "telmuun",    "chinguun",    "nomi",    "aygul",    "behbat",    "narangerel",    "oyunbat",    "turbat",    "baasandash",    "jargalsaihan",    "tugsbileg",    "huwituguldur",    "ursaa",    "ider",    "ariunjargal"];
// function whoIs(who){
// for(i=0; i<names.length; i++){
//     if(who==names[i]){return `${i},${names[i]} jagsaaltand bgaa[i]`}
// }
// }
// console.log(whoIs("baljan"))
// console.log(whoIs("oyunbat"))







// 2. Max too olox
// const number = [22, 33, 44, 57, 879]
// let maxNumber = number[0];
// for (i = 0; i < number.length; i++) {
//     if (maxNumber < number[i]) {
//         maxNumber=number[i];
//     }
// }console.log(maxNumber)






// 3.  2 toonii ihiig ol, comparition bolon logic operetar ashiglahgui
// ----> 1arga math function ashiglaj bodoj bna.
// let a = 8, b = 10;
// let max = ((a+b+Math.abs(a-b))/2);
// console.log(max)

// ----- math funcation ashiglahguiger bodoh
// let a = 12, b = 10;
// let diff = ((b-a)**2)**(1/2);
// let max = (a+diff+b)/2;
// console.log(max)





// 4. i-iin hed dehi huvsagch ve?
const number = [22,987, 86,33, 44, 57, 879]
let maxNumber = 0;
let maxIndex = 0;
for (i = 0; i < number.length; i++) {
    if (maxNumber < number[i]) {
        maxNumber=number[i];
        maxIndex = i;
    }
}console.log(maxIndex,maxNumber)

