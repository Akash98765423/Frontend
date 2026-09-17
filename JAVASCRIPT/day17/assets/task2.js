let employees = [];

document.getElementById("addEmployee").addEventListener("click", function () {

    let name = document.getElementById("employeeName").value;
    let department = document.getElementById("department").value;
    let salary = document.getElementById("salary").value;

    let employee = {
        name: name,
        department: department,
        salary: salary
    };

    employees.push(employee);

    document.getElementById("employeeList").innerHTML = "";

    employees.forEach(function (employee) {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
        `;

        document.getElementById("employeeList").appendChild(row);
    });
});