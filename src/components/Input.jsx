import React from 'react';

const style = {
  borderRadius: '20px',
  backgroundColor: 'black',
  color: 'white',
  '&:focus': {
    outline: 'none',
  },
};
export const Input = ({
  label,
  name,
  onChange,
  value,
  errorMessage,
  min,
  max,
}) => {
  return (
    <div className="mb-3">
      <label>{label}</label>
      <input
        type="text"
        className="form-control"
        style={style}
        name={name}
        min={min}
        max={max}
        onChange={onChange}
        value={value}
        regex="/^\d*\.?\d{0,2}$/;"
      />
      {!!errorMessage && <div
        className={'is-invalid'}
        style={{ color: 'red' }}
      >
        {errorMessage}
      </div> } 
    </div>
  );
};
