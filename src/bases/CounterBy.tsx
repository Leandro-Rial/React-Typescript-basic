import React, { useState } from 'react'

interface Props {
    initialValue?: number,
}

interface CounterState {
    counter: number,
    clicks: number
}

const CounterBy = ({ initialValue = 5 }: Props) => {
    const [{ counter, clicks }, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    })

    const handleClick = (num: number) => {
        setCounterState(({ counter, clicks }) => ({
            counter: counter + num,
            clicks: clicks + 1
        }))
    }

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <h3>Clicks: {clicks}</h3>

            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </div>
    )
}

export default CounterBy
