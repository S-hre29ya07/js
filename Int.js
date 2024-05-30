// Sort the array
// This texchnique is called selection sort


// function sortArray(arr){
//     for(var i =0; i<arr.length-1; i++ ){
//         for(var j =i+1; j<arr.length; j++){
//             if(arr[i]>arr[j]){
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//             }
//         }
//     }
//     return arr
// }
// const arr= [9,5,7,2,1]
// ans = sortArray(arr)
// console.log(ans)


// function sortArray(arr){
//     return arr.sort((a,b) => a-b)
// }
// const arr = [9,5,7,2,1]
// ans= sortArray(arr)
// console.log(ans)


// find sum of array

// function findSum(arr){
//     var summ=0;
//     for(var i =0; i<arr.length; i++){
//         summ+= arr[i]
//     }
//     return summ
// }
// const arr= ["hello",1,2,3,3,4, "shreya", true, ["Saab", "Volvo", "BMW"]]
// ans= findSum(arr)
// console.log(ans)


// function findSum(arr){
//     return arr.reduce(function(acc,curr){
//         acc+=curr;
//         return acc;
//     },0)
// }
// const arr= [1,2,3,3,4]
// ans= findSum(arr)
// console.log(ans)


// Find count of elements in array
// function findCount(arr){
//     final ={}
//     for(var i =0; i<arr.length; i++){
//         if(final[arr[i]]){
//             final[arr[i]]++
//         }else{
//             final[arr[i]] =1
//         }
//     }
//     f2= Object.entries(final)
//     f2.sort((a,b) => b[1]- a[1])
//     return f2[0][0]
// }
// const arr = [1,1,2,3,7,8,8,8]
// ans= findCount(arr)
// console.log(ans)


// Write a JavaScript function to calculate the sum of two numbers.  

// function findSum(a,b){
//     return a+b
// }
// const a=1;
// const b =2;
// ans = findSum(a,b)
// console.log(ans)


// Write a JavaScript program to find the maximum number in an array. 
//  function find_max(arr){
//    for(var i =0; i<arr.length-1; i++){
//     for(var j = i+1; j<arr.length; j++){
//         if(arr[i]>arr[j]){
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//         }
//     }
//    }
//    return arr[arr.length-1]
//  }
//  const arr = [1,1,2,3,7,8]
//  ans = find_max(arr)
//  console.log(ans)

// Write a function that takes an array of integers as input and returns a new array with only the unique elements. 
// function findUnique(arr){
//    final ={}
//    for(var i =0; i<arr.length; i++){
//     if(final[arr[i]]){
//         final[arr[i]]++
//     }
//     else{
//         final[arr[i]]=1
//     }
//    }
//    f3=[]
//    f2= Object.entries(final).map(([key]) => f3.push(key))
//    return f3
// }
// const arr = [1,1,2,3,7,8,8,8]
// ans = findUnique(arr)
// console.log(ans)

// Write a function to check if a given string is a palindrome. 

// function palindromecheck(str){
//     revs= ""
//     for (var i =str.length-1; i>=0; i--){
//         revs= revs+str[i]
//     }
//     if (revs!= str){
//         return false
//     }else{
//         return true
//     }
// }
// const str= "acbca"
// ans = palindromecheck(str)
// console.log(ans)

// Given a string, write a function to count the occurrences of each character in the string. 

// function countstr(str){
//     dict={}
//     for (var i=0; i<str.length; i++){
//         if(dict[str[i]]){
//             dict[str[i]]++
//         }else{
//             dict[str[i]] = 1
//         }
//     }
//     const f= Object.entries(dict)
//     f.sort((a,b) => a[1]-b [1])
//     return f.map(([key, value]) => `${key} - ${value}`)
// }
// const str="aabcccdd"
// ans = countstr(str)
// console.log(ans)


// Implement a function to remove duplicates from an array. 
// function removeDuplicate(arr){
//     final=[]
//     for(var i =0; i<arr.length; i++){
//         if(!final.includes(arr[i])){
//             final.push(arr[i])
//         }
//     }
//     return final
// }
// const arr =[1,2,2,3,33,4,4]
// ans = removeDuplicate(arr)
// console.log(ans)



//  Write a function that reverses the order of words in a sentence.
function revWords(str){
    let word=''
    const str_arr=[]
    let ans_str=""
    for(var i =0; i<str.length; i++){
        const char = str[i]
        if(char != " "){
            word+=char
        }else{
            str_arr.push(word)
            word =""
        }
    }
    str_arr.push(word)
   
    for (var i = 0; i < str_arr.length; i++) {
        const reversedWord = str_arr[i].split('').reverse().join('');
        ans_str += reversedWord;
        if (i !== str_arr.length - 1) {
            ans_str += ' ';
        }
    }
return ans_str
}
const str="Hello how are you"
ans=revWords(str)
console.log(ans)
// output = "you are how Hello"


