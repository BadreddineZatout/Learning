import React, {useState, useRef, useEffect} from 'react'

function HookTimer() {
    
    const [timer, setTimer] = useState(0);
    const intervalref = useRef();

    useEffect(() => {
        intervalref.current = setInterval(() => {
            setTimer(prevTimer => prevTimer+1)
        }, 1000);
        return () => {
            clearInterval(intervalref.current);
        }
    }, [])

    return (
        <div>
            Hook Timer - {timer}
            <button onClick={() => clearInterval(intervalref.current)}>Clear Hook Timer</button>
        </div>
    )
}

export default HookTimer
