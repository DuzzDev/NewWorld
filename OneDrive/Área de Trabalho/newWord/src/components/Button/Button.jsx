import React from 'react';
import propTypes from 'prop-types';

Button.propTypes = {
  children: propTypes.node,
  id: propTypes.string,
  className: propTypes.string,
  onClick: propTypes.func,
  disabled: propTypes.bool
};

export default function Button({children,id,className,onClick,disabled}){
  return(
    <>
      <button
        className={className}
        id={id}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
