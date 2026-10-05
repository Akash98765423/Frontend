import Courses from "./Courses";
import Student from "./Student";
import Products from "./Products";
import Employee from "./Employee";

const App = () => {

    const employee = {
        name: "Akash",
        role: "Frontend Developer",
        salary: 40000,
        city: "Chennai"
    };

    return (
        <div>

            <Courses />

            <Student />

            <Products />

            <Employee employee={employee} />

        </div>
    );
};

export default App;