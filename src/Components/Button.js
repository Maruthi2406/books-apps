import { useState } from "react";

export default function Button(){
const[open, setOpen]=useState(true)
return(
     <div className="btn">
      <button onClick={() => setOpen(true)}>Open </button>
      <button onClick={() => setOpen(false)}>Close </button>
    </div>
);
} 