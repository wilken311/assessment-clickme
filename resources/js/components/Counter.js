import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Counter.css";
import { useUserCounter } from "../hooks/counter";

function Counter() {
    const [userId, setUserId] = useState(1); //set default user
    const [counter, setCounter] = useState(0); //set default count
    const [message, setMessage] = useState("");

    useEffect(() => {
        async function getUserData() {
            //check existing user
            const user = await useUserCounter(userId);
            if (user.success) {
                setCounter(user.counter);
            } else {
                setCounter(user.counter);
            }
        }
        getUserData();
    }, []);

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
            user_id: userId,
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
            const user = await useUserCounter(userId);
            if (user.success) {
                updateCounter(user.counterId);
            } else {
                createCounter();
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
