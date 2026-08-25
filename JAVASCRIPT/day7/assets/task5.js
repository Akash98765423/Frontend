let employee =[
    {name:"Akash",salary:40000},
    {name:"Vicky",salary:48000},
    {name:"Bharathi",salary:10000},
    {name:"Tamil",salary:50000}
];

let greaterThan = 40000

for (let a = 0;a < employee.length; a++) {
    if (employee[a].salary >= greaterThan) {
        console.log(employee[a].name);
    }
}

