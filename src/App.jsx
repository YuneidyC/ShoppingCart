import { useState } from 'react';
import './App.css';

function App() {
    const [heading, setHeading] = useState('Hello!');

    const clickHandler = () => {
        setHeading('Hello World!');
    };

    return (
        <>
            <button type="button" onClick={clickHandler}>
                Click Me
            </button>
            <h1>{heading}</h1>
        </>
    );
}

export default App;
