function exampleFunction(){
    if(true){
    var functionScopedVar = "I am functioned-scoped";
    }
    console.log(functionScopedVar); //i am function- scoped
}
exampleFunction();

console.log(functionScopedVar);// Error: functionScopedVar is not defined