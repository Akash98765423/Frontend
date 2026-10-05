const Students = () => {

    const students = [
        {
            id: 1,
            name: "Arun",
            age: 22,
            course: "React JS"
        },
        {
            id: 2,
            name: "Vicky",
            age: 23,
            course: "Java"
        },
        {
            id: 3,
            name: "Bharathi",
            age: 21,
            course: "Python"
        },
        {
            id: 4,
            name: "Tamil",
            age: 24,
            course: "JavaScript"
        }
    ];

    return (
        <div>
            <h2>Students</h2>

            {students.map((student) => (
                <div key={student.id}>
                    <p>Name: {student.name}</p>
                    <p>Age: {student.age}</p>
                    <p>Course: {student.course}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Students;