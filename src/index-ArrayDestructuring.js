import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake() {
    return (
        <h1>Lake !</h1>
    );
}

function SkiResort(name) {
    return (
        <h1>SkiResort !</h1>
    );
}

ReactDOM.render(
    <>
        <Lake />
        <SkiResort />
    </>,
    document.getElementById('root')
);

const [first, second, third] = [
    "popcorn",
    "lays",
    "Biscuit"
]

console.log(first);
console.log(second);
console.log(third);