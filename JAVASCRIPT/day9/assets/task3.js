let factorial = 1

let number = (n)=>{
    
    for (let a=1; a <= n;a++) {
        factorial = factorial*a 
    }
    return factorial;
}

console.log(number(8));

