/* eslint-disable react/prop-types */
import "../styles/Collapse.css";

function Collapse(props) {
  const { toggleCollapse, form, title } = props;
  return (
    <button
      className="collapsed-form section-form"
      id={form.id}
      onClick={toggleCollapse}
    >
      <p className="collapsed-form-title">{form[title]}</p>
    </button>
  );
}

export default Collapse;
