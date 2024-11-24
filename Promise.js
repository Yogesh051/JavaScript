// let firstPromise = new Promise((resolve, reject)=>{
//     console.log("Yogesh");
//     reject(new Error("Internal Error"));
// }); 


// let firstPromise = new Promise((resolve,reject)=>{
//     setTimeout(function sayMyName(){
//         console.log("My name is Yogesh Upadhyay");
//     },10000)
//     resolve(1); 
// });


const promise = new Promise((resolve, reject) => {
    // Perform an asynchronous operation
    const success = true;

    if (success) {
        resolve("Operation succeeded!");
    } else {
        reject("Operation failed!");
    }
});

// Handling the Promise
promise
    .then(result => {
        console.log(result); // Logs "Operation succeeded!"
    })
    .catch(error => {
        console.log(error); // Logs "Operation failed!" if rejected
    });
