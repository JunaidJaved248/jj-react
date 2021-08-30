import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
    const [val, setVal] = useState("");
    const [val1, setVal1] = useState("");

    useEffect(() => {
        console.log(`field 1: ${val}`);
    }, [val]);
    useEffect(() => {
        console.log(`field 2: ${val1}`);
    }, [val, val1]);

    return (
        <>
            <label>
                Favorite Pharse:
                <input value={val} onChange={e => setVal(e.target.value)} />
            </label>
            <label>
                Second Pharse:
                <input value={val1} onChange={e => setVal1(e.target.value)} />

            </label>
        </>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
