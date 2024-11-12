/* eslint-disable react/prop-types */
import "../styles/InputComponent.css";

// eslint-disable-next-line react/prop-types
function InputComponent({
  id,
  labelText,
  placeholder,
  type,
  value,
  onChange,
  required,
  optional,
  dataId,
}) {
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
          data-key={dataId}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          data-key={dataId}
        />
      )}
    </div>
  );
}

export default InputComponent;
