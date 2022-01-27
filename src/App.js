import React,{useState} from 'react';
import './style.css';

export default function App() {
  const [count,setCount]=useState(0)
  return <div>
    <h3>Javascript Counter</h3>
    <h3>{count}</h3>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
  <button onClick={()=>{
      setCount(0)
    }}>Nuetral</button>
  </div>;
}
