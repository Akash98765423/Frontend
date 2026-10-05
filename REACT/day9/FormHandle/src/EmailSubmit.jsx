import { useState } from "react";

const EmailSubmit = () => {

    const [email, setEmail] = useState("");
    const [submittedEmail, setSubmittedEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmittedEmail(email);
    };

    return (
        <div>
            <h2>Email Submit</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit">
                    Submit
                </button>

            </form>

            <p>Submitted Email: {submittedEmail}</p>
        </div>
    );
};

export default EmailSubmit;