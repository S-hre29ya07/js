// Count number of arrays in array;

// function countArr(arr){
//     count =0;
//     for (var i of arr){
//         if(Array.isArray(i)){
//             count++
//         }
//     }
//     return count
// }
// const arr = [2,8,[6,3,3],[4],5,[3,4,[5,4]]]
// ans = countArr(arr)
// console.log(ans)

// Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.
// function findNaN(arr){
//     var ans=[];
//     for (let i in arr){
//         if (Number.isNaN(arr[i])){
//             ans.push(parseInt(i))
//         }
//     }
//     return ans
// }
// const arr = [2, 4, NaN, 16, 32, NaN]
// ans = findNaN(arr)
// console.log(ans)


// Write a JavaScript program to check if an array is a factor chain or not.
// function findfactorchain(arr){
//     for(var i =0; i<arr.length-1; i++){
//         if (arr[i+1] % arr[i] !=0){
//             return false
//         }
//     }
//     return true
// }
// const arr = [2, 4, 16, 32]
// ans=findfactorchain(arr)
// console.log(ans)


// Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.
// function findMixedSum(arr){
//     var summ=0;
//     var ans =[]
//     for(var i of arr){
//         if(Number.isInteger(i)){
//             summ=summ+i
//             ans.push(i)
//         }
//     }
//     return summ
// }
// const arr=[2, "11", 3, "a2", false, 5, 7, 1]
// ans= findMixedSum(arr);
// console.log(ans)


// Sort array
// function sorting(arr){
//     for (var i =0; i<arr.length; i++){
//         for (var j =0; j<(arr.length-i-1); j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//             }
//         }
//     }
//     return arr
// }
// const arr = [1,4,3,2,6,7]
// ans = sorting(arr)
// console.log(ans)

// Write a JavaScript program that takes an array of numbers and returns the third smallest number.
function findThirdsmallest(arr){
    for(var i =0; i<arr.length;i++){
        for(var j =0; j<(arr.length-i-1);j++){
            if(arr[j]>arr[j+1]){
              [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr[2]
}
const arr = [1,4,3,2,6,7];
ans = findThirdsmallest(arr)
console.log(ans)

