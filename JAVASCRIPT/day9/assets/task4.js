//var --> functional scope - use wherever you want
//let & const --> block scope  used inside a funtions blocks or conditions


// GLOBAL SCOPE

var dress = "Shrit" 
let dress1 = "Pant"
const dress2 = "Shoe"

function outfit (){

    console.log(dress);
    console.log(dress1);
    console.log(dress2);
}
outfit()
//if you initial a value in globally.you can access global scope wherever you want. 




// FUNCTION SCOPE 

function actor(){             
    var thalapathy = "vijay"
    let thala = "ajith"
    const superStar = "rajini"


        if (true) {  
            console.log(thalapathy);
            console.log(thala);
            console.log(superStar);
        }
}
actor()
// if you initial a value inside a function in the first(TOP) you can access the value wherever you want

// BLOCK SCOPE

function game() {
        if (true) {          
            var battle = "free_fire"
            let brain = "sudo"
            const fish = "shark_hunt"


            console.log(battle);
            console.log(brain);
            console.log(fish);
        }
}
game()

// you can only access inside a condition or block->{} .



