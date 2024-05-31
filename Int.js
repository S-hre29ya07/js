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
// function revWords(str){
//     let word = ""
//     const array=[]
    
//     for(var i =0; i< str.length; i++){
//         character = str[i]
//         if(character !=" "){
//             word+=character
//         }else{
//             array.push(word);
//             word =""
//         }
//     }
//     array.push(word)
//     second_array =[]
//     finalstr=""
//   for(var i = 0; i<array.length; i++){
//     second_array.push(array[i].split('').reverse().join(''))
//   }
//   for(var i =0; i<second_array.length; i++){
//     finalstr+=second_array[i]
//     if(i !==0){
//         finalstr+=" "
//     }
//   }
//   return finalstr
// }
// const str="Hello how are you"
// ans=revWords(str)
// console.log(ans)
// output = "olleH woh era ouy"


// function revArray(arr){
//     ans1 =[]
//     for(var i =0; i<arr.length; i++){
//         ans1.push(arr[i].split('').reverse().join(''))
//     }
//     return ans1
// }
// const arr=["helllo", "shreya", "singh"]
// ans = revArray(arr)
// console.log(ans)

// function revStr(str){
//     final=""
//     word=""
//     for(var i =0; i<str.length; i++){
//         character= str[i]
//         if(character !=" "){
//             word+=character
//         }else{
//             final+= word.split('').reverse().join('')+ " ";
//             word=""
//         }
//     }
//     return final+=word.split('').reverse().join('');
// }
// const str= "hello how are you"
// ans= revStr(str)
// console.log(ans)

// function revStr(str){
//   word=""
//   array=[]
//   final=""
//   for(var i=0; i<str.length; i++){
//     character = str[i]
//     if(character != " "){
//         word+=character
//     }else{
//         array.push(word)
//         word=" "
//     }
//   }
//   array.push(word)
//   for(var j = array.length-1; j>=0; j--){
//     final+=array[j]
//     if(j!==0){
//         final+=" "
//       }
//   }
 
//   return final
// }
// const str= "hello how are you"
// ans= revStr(str)
// console.log(ans)

// function revStr(str){
//     let word=""
//     let final=""
//     for(var i =0; i<str.length; i++){
//         character = str[i]
//         if(character!=" "){
//             word+=character
//         }else{
//             final+=word.split('').reverse().join('')+" ";
//             word=""
//         }
//     }
//     return final+=word.split('').reverse().join('')
//   }
//   const str= "hello how are you"
//   ans= revStr(str)
//   console.log(ans)

// grouping even and odd numbers into separate arrays. 
// function groupArray(arr){
//     const evenA=[]
//     const OddA= []
//     for(var i =0; i<arr.length;i++){
//         if(arr[i] %2 ===0){
//             evenA.push(arr[i])
//         }else{
//             OddA.push(arr[i])
//         }
//     }
//     return {evenA, OddA}
// }
// const arr=[1,2,8,6,4,9]
// ans= groupArray(arr)
// console.log(ans)


//  Write a function that finds the second largest number in an array. 
// function findS(arr){
//     for(var i =0; i <arr.length-1; i++){
//         for(var j= i+1; j<arr.length; j++){
//             if(arr[i]< arr[j]){
//                 [arr[i], arr[j]]= [arr[j], arr[i]]
                
//             }
//         }
//     }
//     return arr[1]
// }
// arr=[22,1,2,5,6,78,90]
// ans= findS(arr)
// console.log(ans)

// Implement a function that merges two arrays into a single array, alternating elements from each array. 
// function SingleArr(arr1, arr2){
//     final=[]
//     maxLength = Math.max(arr1.length, arr2.length)
//     for(var i=0; i<maxLength; i++){
//         if(i<arr1.length){
//             final.push(arr1[i])
//         }
//         if(i<arr2.length){
//             final.push(arr2[i])
//         }
//     }
//     return final
// }
// const arr1= [1,2,3,4]
// const arr2=[ 6,7,8]
// ans=SingleArr(arr1,arr2)
// console.log(ans)

// Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array. 
// function removeFalsyValues(arr) { 

//     return arr.filter(Boolean); 
  
//   } 
//   const arr=[false, null, 0, "", undefined, NaN]
//   const ans= removeFalsyValues(arr)
//   console.log(ans)

// function removeFalsyValues(arr) {
//     return arr.filter(Boolean);
// }

// const arr = [false, null, 0, "", undefined, NaN, 2];
// const ans = removeFalsyValues(arr);
// console.log(ans); // Output: []


// Implement a function that finds the index of a specific element in an array. If the element is not found, the function should return -1. 
// function findIndex(arr,ele){
//     for(var i in arr){
//         if(arr[i] === ele){
//             return i
//         }
//     }
// }
// let ele= 4
// const arr = [ 12,5,4,9]
// ans=findIndex(arr,ele)
// console.log(ans)

// Write a function that sorts an array of strings in alphabetical order. 
// function sortingA(arr){
//     return arr.slice().sort()
// }
// const arr=["shreya","hello", "abs"]
// ans= sortingA(arr)
// console.log(ans)



// Write a function that returns a new array containing only the unique elements from an input array. 
// function findUnique(arr){
//     let final=""
//     for(var i =0; i<arr.length; i++){
//         if(!final.includes(arr[i])){
//             final+=arr[i]
//         }
//     }
//     return final
// }
// const arr="sshhryee"
// ans=findUnique(arr)
// console.log(ans)

// whose count is maximum
// function findele(arr){
//     dict={}
//     for(var i=0; i<arr.length; i++){
//         if(dict[arr[i]]){
//             dict[arr[i]]+=1
//         }
//         else{
//             dict[arr[i]]=1
//         }
//     }
//     const arr1=Object.entries(dict)
//     arr1.sort((a,b) => b[1]-a[1])
//     return arr1[0][0]
// }
// const arr =[1,2,3,3,3,5,6,8,6,5,9,5,0,5]
// ans=findele(arr)
// console.log(ans)

// Write a function that checks if a given string is an anagram of another string (contains the same characters in a different order). 
// function checkA(str1, str2){
//     let sorted_s1= str1.split("").sort().join("")
//     let sorted_s2 = str2.split("").sort().join("")
//     if(sorted_s1=== sorted_s2){
//         return true
//     }
//     else{
//         return false
//     }
// }
// let str1= "Skyw"
// let str2= "wkyS"
// ans= checkA(str1, str2)
// console.log(ans)

// Write a function that accepts a number and returns its factorial (e.g., factorial of 5 is 5 x 4 x 3 x 2 x 1). 
// function findFact(num){
//     let product=1;
//     for(var i =num; i>=1; i--){
//         product*=i
//     }
//     return product
// }
// let num =4;
// ans= findFact(num)
// console.log(ans)

// function palindrome(str){
//     rev_str=""
//     for(var i = str.length-1; i>=0; i--){
//         rev_str+=str[i]
       
//     }
//     if(rev_str!== str){
//         return false
//     }else{
//         return true
//     }
// }
// let str= "aabaa"
// ans=palindrome(str)
// console.log(ans)

console.log(x)
let x =10;