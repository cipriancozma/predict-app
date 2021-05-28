import "./InputForm.css";

const InputForm = ({ onInputChange, onPredictBtn }) => {
  return (
    <div>
      <p>
        {
          "Give it a try!!! This will recognize the food items down to the ingredient level."
        }
      </p>
      <div className="center">
        <input
          type="text"
          style={{ marginRight: "10px" }}
          className="inputForm"
          onChange={onInputChange}
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          style={{ marginTop: "10px", zIndex: "1" }}
          onClick={onPredictBtn}
        >
          Try it!
        </button>
      </div>
    </div>
  );
};

export default InputForm;
