let students = [];

document.getElementById("addStudent").addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;

    let student = {
        name: name,
        age: age,
        city: city
    };

    students.push(student);

    
    document.getElementById("studentList").innerHTML = "";

    students.forEach(function (student) {

        let div = document.createElement("div");

        div.innerHTML = `
            <p>Name: ${student.name}</p>
            <p>Age: ${student.age}</p>
            <p>City: ${student.city}</p>
            <hr>
        `;

        document.getElementById("studentList").appendChild(div);
    });
});