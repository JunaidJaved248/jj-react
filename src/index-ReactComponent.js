import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Hello(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>Welcome to {props.library}!!</h1>
//       <p>Let's {props.message}.</p>
//       <p>T # {Object.keys(props).length}.</p>
//     </div>
//   );
// }

function Hello({library, message, number}) {
  return (
    <div>
      <h1>Welcome to {library}!!</h1>
      <p>Let's {message}.</p>
      <p>T # {number}.</p>
    </div>
  );
}

ReactDOM.render(
  <Hello library="React.JS" message="Have a fun Guyz!!" number={3}/>,
  document.getElementById('root')
);

