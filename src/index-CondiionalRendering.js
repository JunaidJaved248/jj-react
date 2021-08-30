import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const list = [1, 2, 3, 4, 5];

function Lake(name) {
    return (
        <div>
            <h1>Visit {name}</h1>
        </div>
    );
}

function SkiResort(name) {
    return (
        <div>
            <h1>Visit {name}!</h1>
        </div>
    );
}

function App(props) {
    // eslint-disable-next-line no-lone-blocks
    return (
        <div>
            {
                props.season === "summer" ? (
                    <Lake name="Jenny Lake" />
                ) : props.season === "winter" ? (
                    <SkiResort name="JHMR" />
                ) : (
                    <h1>
                        Come Back in Winter Or Summers!
                    </h1>
                )
            }
        </div>
    );
    // return <SkiResort />;s
}

ReactDOM.render(
    <App season="fall" />,
    document.getElementById('root')
);

