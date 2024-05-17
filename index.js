// function count(){
//     for (let i = 1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i)
//         }, i*1000)
//     }
//     console.log("shreya")
// }
// count();

// function count(){
//     for (let i=1; i<=5; i++){
//         function x(){
//             setTimeout(function(){
//                 console.log(i)
//             }, i*1000)
//         }
//         x(i)
//     }
// }
// count();


// Here b is called parameter
// function outer(b){
//     function inner(){
//         console.log(a,b)
//     }
//     let a = 10;
//     inner();
// }
// var z = outer(20);
// // Here the string is called argument
// z();

function outest(){
    var c = 2000;
    function outer(b){
        function inner(){
            console.log(a,b,c)
        }
        var a = 10;
        inner();
    }
    outer("Shreya outer");
}
var a = 150;
var z = outest();
z();