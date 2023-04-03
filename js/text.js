// function f(callback) {
//     return callback;
// }
// const a = f(function (){
//     console.log("callback");
// })
// // console.log(a);

// a();

const obj = {
     nn: 'sam', 
     class: '12'
}

// obj.class, obj.name
// spread , rest
function a (...args) {
    
}

a(1, 2, 4)
 
const { nn, ...other } = obj;
console.log(nn, other);
