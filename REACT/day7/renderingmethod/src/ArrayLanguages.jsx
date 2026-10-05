const ArrayLanguages = () => {

    const languages = [
        "JavaScript",
        "Python",
        "Java",
        "C++",
        "C#"
    ];

    return (
        <div>
            <h2>Programming Languages</h2>

            {languages.map((language, index) => (
                <p key={index}>{language}</p>
            ))}
        </div>
    );
};

export default ArrayLanguages;