// 217 bodlogo.
// let nums = [1,2,3,1];
// for (let i = 0 ; i < nums.length ; i++){
//     var temp = nums[i];
//     for (let j = i + 1; j < nums.length ; j++ ){
//         if(nums[j] === temp){
//             console.log(true);
//         }
//     }
//     return false
// }


// nums.sort((a, b)=>{
//    return b-a
// })
// for(i=0; i<nums.length; i++){
//     if(nums[i]==nums[i+1]){
//         return true
//     }
// }return false
// console.log()

// 283 move zeroes
let nums = [0,1,0,3,12];
nums.sort((a, b) => a-b)

// for(i=0; i<nums.length; i++){
// if(nums[i]!==0){ 

// }
// }
console.log(nums)


// let arr = [];
// for(i=0; i<nums.length; i++){
//     if(nums[i] !== 0){
//         arr.push(nums[i])}
//    };
//    for(i=0; i<nums.length; i++){
//     if(nums[i] == 0){
//         arr.push(nums[i])
//     }
//    }
//    console.log(arr)