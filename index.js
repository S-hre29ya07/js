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

// function findMax(arr){
//     num = arr[0];
//     for (var i =1; i<arr.length; i++){
//         if(arr[i]>num){
//             num = arr[i]
//         }
//     }
//     return num
// }
// const arr = [1,2,3,7];
// ans = findMax(arr)
// console.log(ans)


// function palindrome(str){
//     finalStr= ""
//     for (var i =(str.length)-1; i>=0; i--){
//         finalStr= finalStr+str[i]
//     }
//     if (finalStr === str){
//         return "YES"
//     } else{
//         return "NO"
//     }
// }
// const str = "shs"
// ans = palindrome(str)
// console.log(ans)

// function reverseString(str){
//     revStr = ""
//     for (var i = (str.length)-1; i>=0; i--){
//         revStr+=str[i]
//     }
//     return revStr

// }

// const str = "Shreya singh"
// ans = reverseString(str)
// console.log(ans)

// function evenNum(arr){
//     var ansArray=[];
//     for (var i =0; i<=arr.length;i++){
//         if(arr[i]%2 == 0){
//             ansArray.push(arr[i])
//         }
//     }
//     return ansArray
// }
// const arr = [ 1,2,4,7,9]
// ans = evenNum(arr)
// console.log(ans)


function factorial(num){
    var ans = 1;
    for (var i= num; i>=1; i--){
        ans=ans*i
    }
    return ans
}
var num = 3;
ansf = factorial(num)
console.log(ansf)