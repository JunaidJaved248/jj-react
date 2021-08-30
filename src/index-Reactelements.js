import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
    name: "Lahore",
    country: "Pakistan"
};

ReactDOM.render(
  // React.createElement(
  // "div",
  // { style: {  color:"red"} },
  // React.createElement("h1", null,"Hello JJ!!!"),
  // ),
  <h1 id="heading">Hello From {city.name} is in {city.country}</h1>,
  document.getElementById('root')
);

