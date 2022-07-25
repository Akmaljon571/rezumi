import { createContext, useState, useEffect } from "react";

export const State = createContext()


export const StatePriveder = ({ children }) => {
    let til = JSON.parse(localStorage.getItem('lan'))
    let rang = JSON.parse(localStorage.getItem('rang'))
    const [lan, setLan] = useState( til || 'uz');
    const [qora, setQora] = useState( rang || 'qora');

    useEffect(() => {
        window.localStorage.setItem('lan', JSON.stringify(lan))
        window.localStorage.setItem('rang', JSON.stringify(qora))
    }, [lan, qora]);

    const data = {lan, setLan, qora, setQora}

    return <State.Provider value={data}>{ children }</State.Provider>
}