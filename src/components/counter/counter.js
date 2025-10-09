import { useState, useEffect } from "react";

export default function Counter({ val, time }) {
    const [ currVal, setCurrVal ] = useState(0);
  
    useEffect(() => {
      currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
    }, [ currVal ]);
  
    return <p>{currVal}</p>;
  }