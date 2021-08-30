import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function GitHubUser({ login }) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error);
    }, []);
    if (data) {
        // return <div>{JSON.stringify(data)}</div>
        return (
            <div>
                <h1>{data.login}</h1>
                <img src={data.avatar_url} width={100} alt="" />
            </div>
        )
    }
    return null;
}

function App() {
    return <GitHubUser login="mojombo" />;
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
