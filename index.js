//  12 sariin 23nd
//------- hed dehi 9 ve? gedgiig oloh
// var day = 10
// if (day >= 1 && day <= 9) {
//     console.log('ehnii 9')
// } else
//     if (day >= 10 && day <= 18) {
//         console.log('2dahi9')
//     } else
//         if (day >= 19 && day <= 27) {
//             console.log('3dahi9')
//         } else
//             if (day >= 28 && day <= 36) {
//                 console.log('4dahi9')
//             } else
//                 if (day >= 37 && day <= 45) {
//                     console.log('5dahi9')
//                 }
//                 else
//                     if (day >= 46 && day <= 54) {
//                         console.log('6dahi9')
//                     }
//                     else
//                         if (day >= 55 && day <= 63) {
//                             console.log('7dahi9')
//                         }
//                         else
//                             if (day >= 64 && day <= 72) {
//                                 console.log('8dahi9')
//                             }
//                             else
//                                 if (day >= 73 && day <= 81) {
//                                     console.log('9dahi9')
//                                 }
//                                 else
//                                     if(day >= 81) {
//     console.log('dulaahan bolno')
// }




//  12 sariin 24nd
// var text = '';
// text = text + '*';
// console.log(text);

// text = text + '*'
// console.log(text);

// *
// **
// ***
// ****
// *****  1t hiih.
// *****
// ****
// ***
// **
// *   2t hiih.

// var text = ''
// for(var i = 0; i <+ 5; i++){
//     text = text + '*';
//     console.log(text);
// }

// var text = ''
// for(var i = 0; i <+ 5; i++){
//     text = text + 'a';
//     console.log(text);
// }





// ----------1-100 hurtelh sondgoi tog bichih

// for(var i = 0; i <=100; i++ ){
//     if (i % 2 == 1)
//     console.log(i)
// }




// -------1-100 hurtelh buh toonii niiilber

// var sum = 0;
// for(var i = 0; i <= 100; i++){
// sum = sum + i;
// } console.log(sum)





// -----------1-100 hurtelh toonii urjver

// var mul = 1;
// for(var i = 1; i <= 100; i++){
//     mul = mul * i;
// } console.log(mul)




// 1-100 -----------hurtelh tegsh toonii urjver
// var mul = 1;
// for(var i = 1; i <= 100; i++){
//     if(i % 2 == 0){
//     mul = mul * i;}
// } console.log(mul)





// ----------------1-100 hurtelh sondgoi toonii urjver
// var mul = 1;
// for(var i = 1; i <= 100; i++){
//     if(i % 2 !== 0){
//     mul = mul * i;}
// } console.log(mul)




// 12 sariin 25 Merry Christmas
// ------------ palindrome
// hadgalagdah
// 121
// golog
// naran


//   --------- 1 arga
// var palindrome = "naran"
// var text = ""
// for(i = 0; i <= palindrome.length -1; i++){
//     text = text + palindrome[i]}
// console.log(text == palindrome) 

//  ------------ 2 arga
// var text = 'narah'
// var reverse = ''
// for(var i = text.length -1; i>= 0; i--){
//     reverse = reverse + text[i];
// }if(text == reverse){
//     console.log(true)}else{console.log(false) 
// }

//  ------------- 3 arga buyu two pointer
// console.time()
// var text = "harah"
// let l = 0;
// let r = text.length -1
// for(l;l<text.length/2; l++){
//     if(text [l] !== text[r])
//         {console.log(false);}
// r --;
// }
// console.log(true);
// console.timeEnd()




// toonii zereg oloh

// -------------- 1 arga
// var too = 3
// var zereg = 3
// for(i = 0 ; i < zereg; i++){
//     hariu = too ** zereg //2 4
// }
// console.log(hariu)


// // -------------2 arga
// var too = 3
// var zereg = 4
// var result = 1
// for(let i =1 ; i <= zereg; i++){
//     result *= too
//     console.log(result)
// }

// console.log(2**3)   ijil utgatai
// 2 == 2**3   



// ----------------12 sariin 26nd
// Anhnii too oloh 

// let n = 12
// let isprimenumber = true;

// if (n <= 1) isprimenumber = false
// for (let i = 2; i < n; i++) {
//     if (n % i == 0)  isprimenumber = true
    
// }
// console.log(isprimenumber)






// ----------FUNCTION HICHEEL
// define buyu duudah  parameter   
// function calculate(param){}
// // call/excute nbuyu nershil
// calculate(...para..)


// function checkisprimenumber(n){
//     let isprimenumber = true;
//     if(n <= 1)
// {isprimenumber = false}
// for(let i =2; i <= n; i++){
//         if(n % i ==0){isprimenumber = false}
// }
// console.log(isprimenumber)
// }

// console.log(checkisprimenumber(3))


// -----Lvl 1
// var text = '5'
// text = text +'5'
// console.log(text)


// -----LvL 2
// var text = ''
// for(var i = 4; i >= 0; i++){
//     text = text +'*'
//     console.log(text)
// }

// var n = 10;

// for(let i = 2; i <n; i++){
//     console.log('....')
//     console.log('....')

//     if (i===3){
//         var text ='hello'
//         console.log("jump", text)
//     }

//     console.log('....')

//     console.log('....'
  
// }



function isPrimeNumber(n){
    var result = 'mon'; 
    for (i =2; i <n; i++){
       var hariu = n%i;
       if(hariu == 0){
            result = "bish";
       }
    }

    console.log(result);
}


isPrimeNumber(17);

isPrimeNumber(22);

isPrimeNumber(27);