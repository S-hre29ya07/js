// // Count number of arrays in array;

// // function countArr(arr){
// //     count =0;
// //     for (var i of arr){
// //         if(Array.isArray(i)){
// //             count++
// //         }
// //     }
// //     return count
// // }
// // const arr = [2,8,[6,3,3],[4],5,[3,4,[5,4]]]
// // ans = countArr(arr)
// // console.log(ans)

// // Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.
// // function findNaN(arr){
// //     var ans=[];
// //     for (let i in arr){
// //         if (Number.isNaN(arr[i])){
// //             ans.push(parseInt(i))
// //         }
// //     }
// //     return ans
// // }
// // const arr = [2, 4, NaN, 16, 32, NaN]
// // ans = findNaN(arr)
// // console.log(ans)


// // Write a JavaScript program to check if an array is a factor chain or not.
// // function findfactorchain(arr){
// //     for(var i =0; i<arr.length-1; i++){
// //         if (arr[i+1] % arr[i] !=0){
// //             return false
// //         }
// //     }
// //     return true
// // }
// // const arr = [2, 4, 16, 32]
// // ans=findfactorchain(arr)
// // console.log(ans)


// // Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.
// // function findMixedSum(arr){
// //     var summ=0;
// //     var ans =[]
// //     for(var i of arr){
// //         if(Number.isInteger(i)){
// //             summ=summ+i
// //             ans.push(i)
// //         }
// //     }
// //     return summ
// // }
// // const arr=[2, "11", 3, "a2", false, 5, 7, 1]
// // ans= findMixedSum(arr);
// // console.log(ans)


// // Sort array
// // function sorting(arr){
// //     for (var i =0; i<arr.length; i++){
// //         for (var j =0; j<(arr.length-i-1); j++){
// //             if(arr[j]>arr[j+1]){
// //                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
// //             }
// //         }
// //     }
// //     return arr
// // }
// // const arr = [1,4,3,2,6,7]
// // ans = sorting(arr)
// // console.log(ans)

// // Write a JavaScript program that takes an array of numbers and returns the third smallest number.
// // function findThirdsmallest(arr){
// //     for(var i =0; i<arr.length;i++){
// //         for(var j =0; j<(arr.length-i-1);j++){
// //             if(arr[j]>arr[j+1]){
// //               [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
// //             }
// //         }
// //     }
// //     return arr[2]
// // }
// // const arr = [1,4,3,2,6,7];
// // ans = findThirdsmallest(arr)
// // console.log(ans)

// // Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.

// // function numPrime(arr){                                                                                                            
// //    for(var i of arr){
// //     if(i==1 || (i>2 && i%2==0)){
// //         return false
// //     }
// //    }
// //    return true
// // }
// // const arr=[3,5,7]
// // ans=numPrime(arr);
// // console.log(ans)

// // Write a JavaScript program to find all the unique values in a set of numbers.
// // function uniqueEle(arr){
// //     const dict =[];
// //     for(var i=0; i<=arr.length-1; i++){
// //         if (!dict.includes(arr[i])){
// //            dict.push(arr[i])
// //         }
// //     }
// //     return dict
// // }
// // const arr =[1, 2, 2, 3, 4, 4, 5]
// // ans=uniqueEle(arr)
// // console.log(ans)

// // Function that takes radius and returns area of circle

// const arr = [1,2,3,4]

// function areaCircle(arr){
//     var final= [];
//     for (var i=0; i<arr.length; i++){
//         final.push(arr[i]*arr[i]*3.14)
//     }
//     return final
// }
// ans= areaCircle(arr);
// console.log(ans)

// function circCircle(arr){
//     var final= [];
//     for (var i=0; i<arr.length; i++){
//         final.push(2*arr[i]*3.14)
//     }
//     return final
// }

// ans= circCircle(arr);
// console.log(ans)

// function DiaCircle(arr){
//     var final= [];
//     for (var i=0; i<arr.length; i++){
//         final.push(2*arr[i])
//     }
//     return final
// }

// ans= DiaCircle(arr);
// console.log(ans)


// count of elements in array

// function countNumber(arr){
//     var ans= {}
//     for(var i of arr){
//         if (ans[i]){
//             ans[i]++
//         }
//         else{
//             ans[i]=1
//         }
//     }
//     return ans
// }
// const arr = [1,2,2,2,3,3,4]
// ans= countNumber(arr)
// console.log(Object.entries(ans).map(([key, value]) => `${key} - ${value}`))


// Find sum using function

// function findSum(arr){
//     var summ=0;
//     for(var i=0; i<arr.length; i++){
//         summ+=arr[i]
//     }
//     return summ
// }
// const arr =[1,2,3,4,5]
// ans=findSum(arr)
// console.log(ans)

// find sum using map
// const arr= [1,2,3,4,5]
// const output= arr.reduce(function(acc, curr){
//     return acc= acc+curr
// },0)
// console.log(output)


// Find maximum using function
// function findMax(arr){
//     var maxx=arr[0]
//     for(var i=1; i<arr.length; i++){
//         if (arr[i]<maxx){
//             i++
//         }else{
//             maxx = arr[i]
//         }
//     }
//     return maxx
// }
// const arr =[1,2,5,9]
// ans=findMax(arr)
// console.log(ans)


// const arr =[1,2,5,3,8]
// output = arr.reduce(function(acc,curr){
//     if(curr>acc){
//         acc=curr
//     }
//     return acc
// },arr[0])
// console.log(output)


// return the array from object by making full name
const users=[
    {firstName:"shreya", lastName:"singh", age:4},
    {firstName:"hello", lastName:"world", age:4},
    {firstName:"namaste", lastName:"js", age:4},
    {firstName:"akshay", lastName:"saini", age:4},
]
// ans=["shreya singh","hello wolrd", "namaste js","akshay saini"]

function findFullName(users){
    const final=[]
    for(var i=0; i<users.length; i++){
        final.push(users[i].firstName+ " " + users[i].lastName)
    }
    return final
}
ans= findFullName(users)
console.log(ans)