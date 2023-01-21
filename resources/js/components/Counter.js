import React from "react";
import ReactDOM from "react-dom";
import "./Counter.css";

function Counter() {
    const incrementHandler = (event) => {
        event.preventDefault();
        console.log("Test");
    };

    return (
        <div className="container">
            <div>
                <button className="button" onClick={incrementHandler}>
                    Click Me!
                </button>
            </div>
            <div>
                <h1>1</h1>
            </div>
        </div>
    );
}

export default Counter;

if (document.getElementById("counter")) {
    ReactDOM.render(<Counter />, document.getElementById("counter"));
}
