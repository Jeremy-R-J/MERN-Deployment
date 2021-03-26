import React from 'react'

const FormInput = props => {
    const { label, labelDisplay, type, changeHandler, value, error } = props;

    return (
        <div>
            {
                error ?
                <p>{error.message}</p>
                :
                ''
            }
            <label htmlFor={label}>{labelDisplay}</label>
            {
                type === "checkbox" ?
                <input type={type} name={label} onChange={changeHandler} checked={value} />
                :
                <input type={type} name={label} onChange={changeHandler} value={value} />
            }
        </div>
    )
}

export default FormInput