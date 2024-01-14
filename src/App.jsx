import { useReducer } from "react";

const initialState = {
    value: 0,
};

const reducer = (state, action) => {
    //this "state" is previous state
    // "action" is generally an object, passed by "dispatch"
    
    // if (action.type === "increaseby1") {
    //     return { ...state, value: state.value + 1 };
    // } else if (action.type === "decreaseby1") {
    //     return { ...state, value: state.value - 1 };
    // } else if (action.type === "increaseby5") {
    //     return { ...state, value: state.value + 5 };
    // } else if (action.type === "decreaseby5") {
    //     return { ...state, value: state.value - 5 };
    // } else {
    //     return state;
    // }
    switch (action.type) {
        case "increaseby1":
            return { ...state, value: state.value + 1 };
        case "decreaseby1":
            return { ...state, value: state.value - 1 };
        case "increaseby5":
            return { ...state, value: state.value + 5 };
        case "decreaseby5":
            return { ...state, value: state.value - 5 };
        default:
            return state;
    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // "state" represents the current state
    // we call "dispatch" to trigger a state update
    // React automatically calls "reducer" after calling the dispatch
    // reducer will update the state and return it
    return (
        <div>
            <h1>Value is : {state.value}</h1>
            <button
                onClick={() => {
                    dispatch({ type: "increaseby1" });
                }}
            >
                Increase by 1
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "decreaseby1" });
                }}
            >
                Decrease by 1
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "increaseby5" });
                }}
            >
                Increase by 5
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "decreaseby5" });
                }}
            >
                Decrease by 5
            </button>
        </div>
    );
};

export default App;
