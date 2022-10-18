import { useCounter } from "../hooks/useCounter"

const CounterHook = () => {
    const { counter, handleClick, elementToAnimate } = useCounter({ maxCount: 15 })

    return (
        <div>
            <h1>CounterHook: {counter}</h1>
            <h2 ref={elementToAnimate}>{counter}</h2>

            <button onClick={() => handleClick()}>+1</button>
        </div>
    )
}

export default CounterHook
