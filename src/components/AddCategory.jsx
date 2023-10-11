import { useState } from "react";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => setInputValue(event.target.value);

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) return;
        
        setCategories(cat => [inputValue, ...cat]);
        setInputValue('');
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
