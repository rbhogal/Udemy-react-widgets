import React, { useState } from 'react';

export default function Dropdown({ options, selected, onSelectedChange }) {
  const [open, setOpen] = useState(false);

  const renderedOptions = options.map(option => {
    if (option.value === selected.value) return null;

    return (
      <div
        onClick={() => {
          onSelectedChange(option);
        }}
        key={option.value}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="" className="label">
          Select A Color
        </label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? `visible transition` : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}
