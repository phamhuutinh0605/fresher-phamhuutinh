import React from "react";

const SubmitButton = ({addItem}) => {
  return (
    <span className="input-group-btn">
      <button className="btn btn-info btn__submit" type="button" onClick={addItem}>
        Submit
      </button>
    </span>
  );
};

export default SubmitButton;