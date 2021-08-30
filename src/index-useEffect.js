import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function CheckBox() {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        alert(`checked: ${checked.toString()}`);
    });
    return (
        <>
            <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)} />
            {checked ? "checked" : "not checked"}
        </>
    );
}

ReactDOM.render(
    <CheckBox />,
    document.getElementById('root')
);
