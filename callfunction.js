// const fun1 = () =>{
//     console.log("Good Morning");
// }

// const callFunctionAfterGreat = (thefunction) =>{
//     console.log("Great");
//     thefunction();
// }           

// callFunctionAfterGreat(fun1); 


// const waitfor5sec = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("hello")
//     }, 5000)
// })

// console.log("start")
// waitfor5sec.then((value) => {
//     console.log(value)
// })
// console.log("end")

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Something went wrong!");
    }, 3000);
});

console.log("Start");

promise
  .then(value => console.log("Resolved:", value))
  .catch(error => console.log("Error:", error));

console.log("End");
