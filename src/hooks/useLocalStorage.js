import { useState, useEffect } from "react";

function useLocalStorage(key, defaultValue = null) {
    const [state, setState] = useState(() => {
        let value
        try {
            value = JSON.parse(
                window.localStorage.getItem(key) || JSON.stringify(defaultValue)
            )
        } catch (err) {
            value = defaultValue;
        }
        return value;
    })
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState];
}

export default useLocalStorage;