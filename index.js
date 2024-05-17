// function count(){
//     for (let i = 1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i)
//         }, i*1000)
//     }
//     console.log("shreya")
// }
// count();

function count(){
    for (let i=1; i<=5; i++){
        function x(){
            setTimeout(function(){
                console.log(i)
            }, i*1000)
        }
        x(i)
    }
}
count();