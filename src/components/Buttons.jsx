import "../styles/Buttons.css";

// eslint-disable-next-line react/prop-types
function Buttons({ save, remove }) {
  return (
    <div className="buttons">
      <button className="remove" onClick={remove} type="button">
        <i className="fa-solid fa-trash" />
        Remove
      </button>
      <button className="save" onClick={save} type="submit">
        Save
      </button>
    </div>
  );
}

export default Buttons;
