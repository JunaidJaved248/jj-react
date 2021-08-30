import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakelist = [
  { id: "1", name: "Echo", trailhead: "Echo" },
  { id: "2", name: "Maud", trailhead: "Echo" },
  { id: "3", name: "Cascade", trailhead: "Echo" }

];

function App({ lakes }) {
  return (
    <div>
      {lakes.map(lake => (
        <div>
          <h2>{lake.name}</h2>
          <p>Accessed By: {lake.trailhead}</p>
        </div>
      ))}
    </div>
  );
}
ReactDOM.render(
  <App lakes={lakelist} />,
  document.getElementById('root')
);


