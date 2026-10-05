import { useState } from "react";

const NameInput = () => {

    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div>
            <h2>Name Input</h2>

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleChange}
            />

            <p>Entered Name: {name}</p>
        </div>
    );
};

export default NameInput;