import React, { useState, useMemo } from 'react';
import './Box.css';

const Box = () => {
    const [number, setNumber] = useState('');
    const [isLight, setIsLight] = useState(false);
    const [n, setN] = useState(1);

    const toggleTheme = () => {
        setIsLight(prevIsLight => !prevIsLight);
        console.log("toggling")
    };
    

    const calculateNthPrime = (n) => {
        const isPrime = num => {
            for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
                if (num % i === 0) return false;
            }
            return num > 1;
        };

        let count = 0;
        let candidate = 1;
        while (count < n) {
            candidate++;
            if (isPrime(candidate)) {
                count++;
            }
        }
        return candidate;
    };

    const nthPrime = useMemo(() => calculateNthPrime(n),[n]);

    console.log("rendering")

    return (
        <div className={`box-container ${isLight ? 'light' : 'dark'}`}>
            <input
                type="text"
                className="box-input"
                value={number}
                onChange={e => setNumber(e.target.value)}
            />
            <label>
                Enter n:
                <input type="number" value={n} onChange={e => setN(e.target.value)} />
            </label>
            <div>Nth Prime Number: {nthPrime}</div>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default Box;
