import React from "react";

const InputText = ({ label, placeholder,
    value, onChange, type }) => {
    return (
        <div>
            <h3 style = {{ color: "blue" }}>{label}</h3>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
 
export default InputText;