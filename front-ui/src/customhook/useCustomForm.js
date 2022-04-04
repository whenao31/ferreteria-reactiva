import { useState } from "react";

export const useCustomForm = (initialState = {}) => {
    const [inputs, setInputs] = useState(initialState);

    const handleChange = (event) => {
        const { name, value, checked, type} = event.target;

        setInputs((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const reset = () => {setInputs(initialState)};

    return [inputs, handleChange, reset]
};

