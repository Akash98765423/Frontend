import { useState } from "react";

const HideShow = () => {

    const [show, setShow] = useState(true);

    const toggleContent = () => {
        setShow(!show);
    };

    return (
        <div>
            <h2>Hide and Show</h2>

            {show && (
                <p>
                    This is the content that can be hidden or shown.
                </p>
            )}

            <button onClick={toggleContent}>
                {show ? "Hide" : "Show"}
            </button>
        </div>
    );
};

export default HideShow;