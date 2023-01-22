import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Counter.css";

function Counter() {
    
    const [user_id, setUser_id] = useState(1); //set default user
    const [counter, setCounter] = useState(0); //set default count
    const [message, setMessage] = useState("");

    const createCounter = async () => {
        let counterData = {
            user_id: 1,
            count: counter + 1,
        };
        try {
            const create = await axios.post(
                `http://127.0.0.1:8000/counter`,
                counterData
            );
            if (create.data.success) {
                setCounter((count) => count + 1);
                setMessage(create.data.message);
            } else {
                setMessage("Something went wrong");
            }
        } catch (error) {
            console.log(error);
            setMessage("Something went wrong");
        }
    };

    const updateCounter = async (id) => {
        let counterData = {
            id: id,
            user_id: user_id,
            count: counter + 1,
        };
        try {
            const update = await axios.put(
                `http://127.0.0.1:8000/counter/${id}`,
                counterData
            );
            if (update.data.success) {
                setCounter((count) => count + 1);
                setMessage(update.data.message);
            } else {
                setMessage("Something went wrong");
            }
        } catch (error) {
            console.log(error);
            setMessage("Something went wrong");
        }
    };

    const incrementCounter = async (event) => {
        event.preventDefault();

        //check existing user
        try {
            const user = await axios.get(
                `http://127.0.0.1:8000/counter/${user_id}`
            );
            if(user.data['data']==null){
                createCounter();
            } else {
                updateCounter(user.data['data'].id);
            }
          
        } catch (error) {
            console.log(error);
            setMessage("Something went wrong");
        }
    };

    return (
        <div className="container">
            <div>
                <button className="button" onClick={incrementCounter}>
                    Click Me!
                </button>
            </div>
            <div>
                <h1>{counter}</h1>
            </div>
            <div>{message}</div>
        </div>
    );
}

export default Counter;

if (document.getElementById("counter")) {
    ReactDOM.render(<Counter />, document.getElementById("counter"));
}
