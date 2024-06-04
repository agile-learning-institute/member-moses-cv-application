import "../styles/InputComponent.css";

// eslint-disable-next-line react/prop-types
function InputComponent({ id, labelText, placeholder, type, value, onChange, required, optional, 'data-key': dataKey }) {

    return (
        <div className="input-component">
            <label htmlFor={id}>
                <span className="label-text">{labelText}</span>
                {required && <span className="required-value">*</span>}
                {optional && <span className="optional-value">optional</span>}
            </label>
            {type === "textarea" ? (
            <textarea
                id={id} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                required={required}
                data-key={dataKey} 
            />) : (
            <input 
            type={type} 
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            data-key={dataKey}
            />
            )}

        </div>
    )

}

export default InputComponent;