let student = [
{name:"Akash",age:20,course:"Java-Fullstack",mark:85},
{name:"Vicky",age:20,course:"Java-Fullstack",mark:75},
{name:"Bharathi",age:20,course:"Java-Fullstack",mark:95}
]

let find = "Akash"

for (let a = 0; a < student.length; a++) {
    if (student[a].name===find) {
        console.log(student[a].name);
        console.log(student[a].mark);
    }
}