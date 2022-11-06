import React from 'react';

const Button = ({ children, ...props }) => {
  console.log(props);
  return (
    <button {...props} className={'button'}>
      {children}
    </button>
  );
};

export default Button;
