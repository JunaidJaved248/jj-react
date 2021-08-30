import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function CheckBox() {
  const [checked, toggle] = useReducer(checked => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  )
}

ReactDOM.render(
  <CheckBox />,
  document.getElementById('root')
);
