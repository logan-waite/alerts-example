import { useEffect, useReducer } from "react";
import { generateID } from "../utils";

export function useAlertReducer() {
    function reducer(state, {type, payload}) {
        switch (type) {
            case 'add':
                const alert = payload.id ? payload : {...payload, id: generateID()}
                state = [alert, ...state]
                break;
            case 'remove':
                console.log('removing alert')
                if (!payload.id) {
                    console.error('No id for the given alert!', payload)
                }
                state = state.filter((a) => a.id !== payload.id)
                break;
            default:
                console.error('Unknown dispatch type')
                break;
        } 
        return state
    }

    const [alerts, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        if (alerts[0]) {
            setTimeout(() => {
                dispatch({type: 'remove', payload: alerts[0]})
            }, alerts[0].timeLimit * 1000)
        }
    }, [alerts])

    return [alerts, dispatch]

}