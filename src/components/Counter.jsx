import React from  "react";
import './counter.css';

const Counter=({initialValue})=>
{
    const [count, setCount]=React.useState(initialValue);
    
    return (
        <div>
            <h1>Counter App</h1>
            <h1 className={count%2 ? 'color-red':'color-green'}>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>{if(count>initialValue)setCount(count-1)}}>Decrement</button>
            <button onClick={()=>setCount(count*2)}>Double</button>
        </div>
    )
}

export default Counter;