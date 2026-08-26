function call() {
    let student=[
        {name:"Akash",mark:85},
        {name:"Vicky",mark:70},
        {name:"Bharathi",mark:90},
        {name:"Tamil",mark:60},
        {name:"Abi",mark:98}
    ]

    let higher = 80;

    for (let a = 0;a <= student.length;a++) {
        if (student[a].mark > higher) {
            console.log(student[a].name);
            
        }
    }
}
call()