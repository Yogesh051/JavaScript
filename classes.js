// class Human{
//     age=13;
//     #wt=55;
//     ht=155;

//     walking(){
//         console.log("I am walking",  this.#wt)
//     }

//     running(){
//         console.log("I am running ")
//     }
//     get fetchWeight(){
//         return this.#wt;
//     }

//     set modifyWeight(val){
//         this.#wt=val;
//     }

//     constructor(newAge, newHeight, newWeight){
//         this.age= newAge;
//         this.ht= newHeight;
//         this.#wt= newWeight; 
//     }
// }

// let obj = new Human(50, 190, 111);
// console.log(obj.age);
// console.log(obj.fetchWeight);

// obj.walking();




// function sayName(myName = "Pandit"){
//     console.log("My name is: ", myName);
// }
// sayName("Yogesh");



// function solve(value={age:15,wt:45,ht:150}){
//     console.log("Hello Jii", value);
// }
// solve();



// function getAge(){
//     return 190;
// }
// function utilitiy(name,age=getAge()){
//     console.log(name," ",age);
// }

// utilitiy("Yogesh");