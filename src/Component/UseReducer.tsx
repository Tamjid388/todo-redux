import { useReducer } from 'react'

type StateType = {
    name?: string,
    age: string,
    hobbies: string[]
}

const initialState: StateType = {
    name: "",
    age: "",
    hobbies: []
}
const reducer = (currentState: any, action: any) => {
    switch (action.type) {
        case "addname":
            return { ...currentState, name: action.payload }
        case "addage":
            return { ...currentState, age: action.payload }
        case "hobbies":
            return {
                ...currentState,
                hobbies: [...currentState.hobbies, action.payload]
            }
        default:
            return currentState
    }
}

export const UseReducer = () => {

    const [state, disPatch] = useReducer(reducer, initialState)


    function handleClick(e: any) {
        e.preventDefault();
        console.log(state);
    }
    return (
        <form className="fieldset" onSubmit={handleClick}>

            {/* Name */}
            <label className="label">Name</label>
            <input name="name"
                type="text"
                className="input"
                onChange={(e) => disPatch({ type: 'addname', payload: e.target.value })}
                placeholder="Name" />
            {/* Age */}
            <label className="label">Age</label>
            <input type="text"
                className="input" name="age"
                onChange={(e) => disPatch({ type: 'addage', payload: e.target.value })}
                placeholder="Age" />

            {/* Hobbies */}
            <label className="label">Hobbies</label>
            <input
                type="text"
                className="input" placeholder="Hobbies"
                onBlur={(e) => disPatch({ type: 'hobbies', payload: e.target.value })}
            />

            <button
                onClick={handleClick}
                type="submit"
                className="btn btn-neutral mt-4">Login</button>
        </form>
    )
}
