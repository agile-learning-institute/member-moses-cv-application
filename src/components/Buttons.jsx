/* eslint-disable react/prop-types */
import "../styles/Buttons.css";

function Buttons({ save, remove }) {
  return (
    <div className="buttons">
      <button className="remove" onClick={remove} type="button">
        <i className="fa-solid fa-trash" />
        Remove
      </button>
      <button className="save" onClick={save} type="button">
        Save
      </button>
    </div>
  );
}

export default Buttons;
