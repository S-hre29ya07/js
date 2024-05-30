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


// function factorial(num){
//     var ans = 1;
//     for (var i= num; i>=1; i--){
//         ans=ans*i
//     }
//     return ans
// }
// var num = 3;
// ansf = factorial(num)
// console.log(ansf)


// function counter(){
//     var count = 0;
//     function incrementCounter(){
//         count++;
//         console.log(count)
//     }
//     return incrementCounter;
// }
// var ans = counter();
// ans()
// ans()
// ans()

// function findCount(arr){
//     var count = {};
//     for(var i =0; i<arr.length;i++){
//         element= arr[i];
//         if(count[element]){
//             count[element]++
//         }else{
//             count[element]=1
//         }
//     }
//     return count
// }
// const arr= [1,2,2,3,3,3,4,4,4,4]
// ans = findCount(arr)
// console.log(ans)

// function findCount(arr){
//     var count = {};
//     for( var i of arr){
//         if ( i in count){
//             count[i]++;
//         }
//         else{
//             count[i]=1
//         }
//     }
//     return Object.entries(count).map(([key,value]) => `${key} - ${value}`)
// }

// const arr= [1,2,2,3,3,3,4,4,4,4]
// ans = findCount(arr)
// console.log(ans)


// function countOcc(arr){
//     var count ={}
//     for (var i of arr){
//         if (i in count){
//             count[i]++
//         }
//         else{
//             count[i]=1
//         }
//     }
//     return Object.entries(count).map(([key,value])=> `${key}-${value}`)
// }
// const arr = [1,1,2,3,3,3,4,4]
// ans= countOcc(arr)
// console.log(ans)


// HOF

// const arr = [1,2,3,4]

// function area(r){
//     return 3.14*r*r
// }
// function circ(r){
//     return 3.14*r*2
// }
// function dia(r){
//     return 2*r
// }

// function ans(arr, logic){
//     var final =[]
//     for (var i=0; i<arr.length; i++){
//         final.push(logic(arr[i]))
//     }
//     return final
// }
// console.log(arr
//     .map(area))
// console.log(ans(arr, circ))
// console.log(ans(arr, dia))

// const arr =[1,2,3,4]

// function diameter(arr){
//     var ans=[]
//     for (var i=0; i<arr.length;i++){
//         ans.push(2*arr[i])
//     }
//     return ans
// }
// final= diameter(arr)
// console.log(final)

// function diameter(num){
//     return 2*num
// }

// var ans= arr.map(diameter)


// ans = arr.map((x)=> 2*x)
// console.log(ans)