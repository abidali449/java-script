let arr = [34, 23, 12];
let a = arr.map((value, index, arr) => {
    console.log(value, index, arr); 
    return value + 1;
});
console.log(a);
