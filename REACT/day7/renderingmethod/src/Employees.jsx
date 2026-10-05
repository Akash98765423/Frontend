const Employees = () => {

    const employees = [
        {
            id: 1,
            name: "Akash",
            department: "IT",
            salary: 40000
        },
        {
            id: 2,
            name: "Vicky",
            department: "HR",
            salary: 35000
        },
        {
            id: 3,
            name: "Bharathi",
            department: "Finance",
            salary: 45000
        },
        {
            id: 4,
            name: "Tamil",
            department: "Development",
            salary: 50000
        }
    ];

    return (
        <div>
            <h2>Employees</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.department}</td>
                            <td>₹{employee.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Employees;