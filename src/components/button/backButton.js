import React from 'react';
import { Link } from 'gatsby';

const BackButton = (props) => {
  return (
    <div
      className="backButton"
      style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}
    >
      <button
        className="btn back-btn"
        onClick={() => {
          if (typeof props.history !== undefined) {
            console.log(props.history);
            // props.history.go(-1);
          } else return null;
        }}
      >
        Back
      </button>
    </div>
  );
};

export default BackButton;
