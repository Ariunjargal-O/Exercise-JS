

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
// const number = [22,987, 86,33, 44, 57, 879]
// let maxNumber = 0;
// let maxIndex = 0;
// for (i = 0; i < number.length; i++) {
//     if (maxNumber < number[i]) {
//         maxNumber=number[i];
//         maxIndex = i;
//     }
// }console.log(maxIndex,maxNumber)


// ----- 1 sariin 3nd

// 1. 3 toonii ih oloh
// let a = 3, b = 9, c = 7;
// let maxNumber = 0;
// if (a > b && a > c) {
//     maxNumber = a
// } else if (b > c) {
//     maxNumber = b
// } else {
//     maxNumber=c
// }
// console.log(maxNumber)



// 2. 4 toonii iheesee 2 dahi ih toog ni oloh

// let a = 13, b = 5, c = 10, d = 20;
// if (a>b && a>c && a<d){
//     console.log(a)
// } else if (a>b && a<c && a>d){
//     console.log(a)
// }  else if (a<b && a>c && a>d){
//     console.log(a)
// }  else if (b>a && b>c && b<d){
//     console.log(b)
// }  else if (b>a && b<c && b>d){
//     console.log(b)
// }  else if (b<a && b>c && b>d){
//     console.log(b)
// }  else if (c>a && c>b && c<d){
//     console.log(c)
// }  else if (c>a && c<b && c>d){
//     console.log(c)
// }  else if (c<a && c>b && c>d){
//     console.log(c)
// }  else if (d>a && d>b && d<c){
//     console.log(d)
// }  else if (d>a && d<b && d>c){
//     console.log(d)
// }  else if (d<a && d>b && d>c){
//     console.log(d)
// } 

// --------- 2 arga.
// let a = 13, b = 2, c = 8, d = 21;
// if (a > b && a > c && a > d) {
//     if (b > c && b > d)
//         console.log(b);
//     if (c > b && c > d)
//         console.log(c);
//     if (d > c && d > b)
//         console.log(d);
// } else if (b > a && b > c && b > d) {
//     if (a > c && a > d)
//         console.log(a);
//     if (c > a && c > d)
//         console.log(c);
//     if (d > a && d > c)
//         console.log(d);
// } else if (c > b && c > d && c > a) {
//     if (d > b && d > a)
//         console.log(d);
//     if (b > d && b > a)
//         console.log(b);
//     if (a > b && a > d)
//         console.log(a);
// } else if (d > a && d > b && d > c) {
//     if (c > b && c > a)
//         console.log(c);
//     if (b > c && b > a)
//         console.log(b);
//     if (a > b && a > c)
//         console.log(a);
// }


//  3. undur jil oloh 
//  400 eswel 4t huwaagddag bas 100d huwaagddaggui bol undur jil bna.
// let jil = 2028
// if (jil % 400 == 0 || jil % 4 == 0 && jil % 100 !== 0) {
//     jil = true
// }
// else {
//     jil = false
// }
// console.log(jil)
// 400 bolon 4 - t huwaagddag eswel 100d huwaagddagui 
// 400 eswel 4t huwaagddag bas 100d huwaagddaggui




// 4. davhardsan too bnauu
// const nums = [1, 7, 7, 15];
// for (i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++)
//         if (nums[j] === nums[i]){
//             console.log(nums[i,j])
//         }
// } 


// 5.Buble sourt
var arr = [7,8,5,6];
for(var i = 0; i < arr.length ; i++){
    var temp;
    for(var j = 0; j < arr.length; j++){
        if(arr[j] > arr[j+1]){
            temp = arr[j]; //8
            arr[j] = arr[j+1]; //index 1 : 3 index 2 : 8
            arr[j+1] = temp;  //
        }
    }
}
console.log(arr);




