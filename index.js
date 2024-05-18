// function findSum(arr){
//     var count = 0;
//     for (var i =0; i<arr.length; i++){
//         count= count+arr[i]
//     }
//     console.log(count)
// }
// findSum([1,2,3])

// function findSum(arr){
//     var count =0;
//     for (var i =0; i<arr.length; i++){
//         count=count+arr[i]
//     }
//     return count;
// }
// const arr = [1,2,3]
// var ans = findSum(arr);
// console.log(ans)
// function findSum(a,b){
//     return (a+b);
// }
// ans = findSum(1,2);
// console.log(ans)

function findMax(arr){
    num = arr[0];
    for (var i =1; i<arr.length; i++){
        if(arr[i]>num){
            num = arr[i]
        }
    }
    return num
}
const arr = [1,2,3,7];
ans = findMax(arr)
console.log(ans)
