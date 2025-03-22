import { useState } from "react";


export default function useLocalStorage(key, initialState){
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);
        if(!persistedState){
            if(typeof initialState === 'function'){
                return initialState();
            } else {
                return initialState;
            }
        }

        const persistedStateData = JSON.parse(persistedState);
        return persistedStateData
    });

    const setPersistedState = (input) => {
        let data;
        if(typeof input === 'function'){
            data = input(state);
        } else {
            data = input;
        }

        const persistedData = JSON.stringify(data);

        localStorage.setItem(key, persistedData);
        setState(data);
    };

    return[
        state,
        setPersistedState
    ]


}