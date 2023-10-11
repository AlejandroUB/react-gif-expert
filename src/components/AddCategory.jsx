import { useState } from "react";

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = (event) => setInputValue(event.target.value);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Search GIFs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}