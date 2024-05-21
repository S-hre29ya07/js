// Count number of arrays in array;

function countArr(arr){
    count =0;
    for (var i of arr){
        if(Array.isArray(i)){
            count++
        }
    }
    return count
}
const arr = [2,8,[6,3,3],[4],5,[3,4,[5,4]]]
ans = countArr(arr)
console.log(ans)