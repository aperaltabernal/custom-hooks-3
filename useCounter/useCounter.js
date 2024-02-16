import { useState } from "react"

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter(current => current + value);
    }
    const decrement = (value = 1) => {
        setCounter(current => {
            if(current - value < 0) return current;
            else return current - value
        });
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,

        increment,
        decrement,
        reset
    }
}