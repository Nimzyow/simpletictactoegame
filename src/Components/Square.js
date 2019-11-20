import React from "react";
import PropTypes from "prop-types";

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

Square.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Square;
