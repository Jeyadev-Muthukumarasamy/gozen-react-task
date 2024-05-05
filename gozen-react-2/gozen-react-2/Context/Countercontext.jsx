import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [counterValue, setCounterValue] = useState(0);

    const incrementValue = () => {
        setCounterValue(prev => prev + 1); 
    };

    const decrementValue = () => {
        setCounterValue(prev => prev - 1); 
    };

    return (    
       <CounterContext.Provider value={{ counterValue, incrementValue, decrementValue }}>
           {children}
       </CounterContext.Provider>
    );
};
