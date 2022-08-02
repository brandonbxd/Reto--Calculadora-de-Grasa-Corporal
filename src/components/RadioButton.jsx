import React from 'react';

export const RadioButton = ({ label, checked, onChange }) => {
  return (
    <div className="mb-3 form-check-inline">
      <input
        type="radio"
        className="form-check-input"
        checked={!checked}
        onChange={onChange}
      />
      <label className="form-check-label ms-1">{label}</label>
    </div>
  );
};
