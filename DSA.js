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
function findNaN(arr){
    var ans=[];
    for (let i in arr){
        if (Number.isNaN(arr[i])){
            ans.push(parseInt(i))
        }
    }
    return ans
}
const arr = [2, 4, NaN, 16, 32, NaN]
ans = findNaN(arr)
console.log(ans)
