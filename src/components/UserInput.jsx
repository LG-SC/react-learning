import { useState } from "react";  

function UserInput({ type, inputName, labelText, initialValue, handleChange }) {
    const [ value, setValue ] = useState(initialValue);

    const onChangeHandler = (e) => {
        setValue(() => e.target.value);
        handleChange(inputName, value);
    }

    return (
        <>
            <p>
                <label htmlFor={inputName}>{labelText}</label>
                <input 
                    type={type} name={inputName} defaultValue={value} required
                    onChange={onChangeHandler}
                />
            </p>
        </>
    );
}
UserInput.propTypes = {
	type : String,
    inputName : String,
    labelText : String,
    initialValue : String | Number,
    // eslint-disable-next-line no-unused-vars
    handleChange : (inputName, value) => {},
}
export default UserInput;