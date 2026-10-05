const ArrayCourses = () => {

    const courses = [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Bootstrap"
    ];

    return (
        <div>
            <h2>Available Courses</h2>

            {courses.map((course, index) => (
                <div key={index}>
                    <p>{course}</p>
                </div>
            ))}
        </div>
    );
};

export default ArrayCourses;