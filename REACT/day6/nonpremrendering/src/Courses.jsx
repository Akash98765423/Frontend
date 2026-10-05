const Courses = () => {

    const courses = [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Bootstrap"
    ];

    return (
        <div>
            <h2>Courses</h2>

            {courses.map((course, index) => (
                <p key={index}>{course}</p>
            ))}
        </div>
    );
};

export default Courses;