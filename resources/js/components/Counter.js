import React from "react";
import ReactDOM from "react-dom";

function Counter() {
    
    const incrementHandler = (event) => {
        event.preventDefault();
        console.log("Test");
    };

    return (
        <div>
            <button onClick={incrementHandler}>Click Me!</button>1
        </div>
    );
}

export default Counter;

if (document.getElementById("counter")) {
    ReactDOM.render(<Counter />, document.getElementById("counter"));
}
