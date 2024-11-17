let obj = {
    age:12,
    wt:68,
    ht:180
};


// obj.color = "white";
// console.log(obj);

let obj2={
    value:101,
    name:"Yogesh"
}

let dest = {...obj,...obj2};

obj.age=11;

console.log(obj);
console.log("dest: ",dest);
