import React, {useState} from "react"
export default function Hook2() {
    const [a, setA] = useState()
    const [b, setB] = useState()
    const [res, setRes] = useState(0)
    return(
        <div>
            <h1>Calc</h1>
            <p>a <input type="text" placeholder="Enter a value" value={a} onChange={(e)=>setA(e.target.value*1)}></input>
            </p> 
            <p>b <input type="text" placeholder="Enter b value" value={b} onChange={(e)=>setB(e.target.value*1)}></input>
            </p>
            <button onClick={(e)=>setRes(a+b)}>+</button>
            <button onClick={(e)=>setRes(a-b)}>-</button>
            <button onClick={(e)=>setRes(a*b)}>*</button>
            <button onClick={(e)=>setRes((a/b).toFixed(2))}>/</button><br/>
            Res = {res}
        </div>
    )
  }